import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import {
  handleWhatsAppHyrox,
  handleWhatsAppTrainingWorld,
  handleCall,
} from "@/lib/utils";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import { Sheet, SheetTrigger } from "./ui/sheet";
import WhatsAppSidebar from "./WhatsAppSidebar";

type NavigationProps = {
  topbarOffset?: boolean;
};

const Navigation: React.FC<NavigationProps> = ({ topbarOffset = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "The Space", path: "/the-space" },
    { name: "Who Needs Us", path: "/who-needs-us" },
    { name: "About Me", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const topClass = topbarOffset ? "top-12 sm:top-8 z-40" : "top-0 z-50";

  return (
    <nav
      className={`fixed ${topClass} left-0 right-0 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-4"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-white text-xs uppercase tracking-wider font-semibold hover:text-white/70 transition-colors ${
                  location.pathname === link.path
                    ? "border-b-2 border-white"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCall}
              className="text-white hover:bg-white/10 hover:text-white px-8 py-8"
            >
              <Phone className="h-5 w-5" />
            </Button>

            {/* Desktop: WhatsApp opens a side sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="whatsapp"
                  size="sm"
                  className="gap-2"
                  aria-label="Whatsapp Us"
                >
                  <WhatsAppIcon />
                  WhatsApp Us
                </Button>
              </SheetTrigger>
              <WhatsAppSidebar />
            </Sheet>
          </div>

          {/* Phone Whatsapp Menu  */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="lg:hidden text-white p-4 hover:bg-white/10 hover:text-white"
                variant="ghost"
                // onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <div className="scale-110">
                  <WhatsAppIcon variant="light" />
                </div>
              </Button>
            </SheetTrigger>
            <WhatsAppSidebar />
          </Sheet>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-sm pb-6 animate-slide-down">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-white text-sm uppercase tracking-wider font-semibold hover:text-white/70 transition-colors py-2 ${
                    location.pathname === link.path
                      ? "border-l-4 border-white pl-4"
                      : "pl-4"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 px-4 pt-4 pb-6 border-t border-white/20">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCall}
                  className="flex-1 text-white border-white hover:bg-white hover:text-black"
                  aria-label="Call us"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleWhatsAppHyrox}
                  className="flex-1 text-white border-white hover:bg-white hover:text-black"
                  aria-label="Learn about Hyrox"
                >
                  <WhatsAppIcon variant="light" />
                  Learn about Hyrox
                </Button>
                <Button
                  variant="whatsapp"
                  size="sm"
                  onClick={handleWhatsAppTrainingWorld}
                  className="flex-1"
                  aria-label="Contact Training World"
                >
                  <WhatsAppIcon />
                  Contact Training World
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
