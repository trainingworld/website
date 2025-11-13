// src/router/routes.tsx
import React from "react";
import type { ReactElement } from "react";
import Home from "@/pages/Home";
import TheSpace from "@/pages/TheSpace";
import WhoNeedsUs from "@/pages/WhoNeedsUs";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Gallery from "@/pages/Gallery";

export interface AppRoute {
  path: string;
  element: ReactElement;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
}

export const appRoutes: AppRoute[] = [
  { path: "/", element: <Home />, changefreq: "weekly", priority: 1 },
  {
    path: "/the-space",
    element: <TheSpace />,
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/who-needs-us",
    element: <WhoNeedsUs />,
    changefreq: "monthly",
    priority: 0.8,
  },
  { path: "/about", element: <About />, changefreq: "yearly", priority: 0.6 },
  {
    path: "/contact",
    element: <Contact />,
    changefreq: "monthly",
    priority: 0.6,
  },
  {
    path: "/gallery",
    element: <Gallery />,
    changefreq: "monthly",
    priority: 0.7,
  },
];

// Helper export for sitemap generation (no React elements)
export const sitemapRoutes = appRoutes.map(
  ({ path, changefreq, priority }) => ({
    path,
    changefreq,
    priority,
  })
);
