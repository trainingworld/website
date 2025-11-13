import { promises as fs } from "node:fs";
import { resolve } from "node:path";
import { SitemapStream, streamToPromise } from "sitemap";
import { sitemapRoutes } from "../src/router/routes";

const SITE_URL = process.env.VITE_SITE_URL ?? "https://www.trainingworld.co.in";

async function main() {
  const smStream = new SitemapStream({ hostname: SITE_URL.replace(/\/$/, "") });

  sitemapRoutes.forEach(({ path, changefreq = "monthly", priority = 0.5 }) => {
    smStream.write({
      url: path === "/" ? "/" : path.replace(/\/$/, ""),
      changefreq,
      priority,
    });
  });

  smStream.end();
  const sitemap = (await streamToPromise(smStream)).toString();
  const outPath = resolve(process.cwd(), "public", "sitemap.xml");
  await fs.writeFile(outPath, sitemap, "utf8");
  console.log(`✅ sitemap.xml written to ${outPath}`);
}

main().catch((error) => {
  console.error("Failed to generate sitemap:", error);
  process.exit(1);
});
