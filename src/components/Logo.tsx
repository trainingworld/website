import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  isCentered?: boolean;
  showPeriod?: boolean;
}

const Logo = ({
  className = "",
  showPeriod = true,
  isCentered = true,
}: LogoProps) => {
  return (
    <Link
      to="/"
      className={`text-white font-chunkfive uppercase tracking-wider hover:text-white/70 transition-colors text-base lg:text-xl ${className}`}
    >
      <div className={`flex flex-col items-${isCentered ? "center" : "start"}`}>
        <span>Training</span>
        <span>World{showPeriod ? "." : ""}</span>
      </div>
    </Link>
  );
};

export default Logo;
