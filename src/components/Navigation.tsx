import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
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

  const handleWhatsApp = () => {
    window.open("https://wa.me/919999999999?text=Hi, I'd like to know more about Training World", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+919999999999";
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-xl uppercase tracking-wider">
            Training World
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-white text-xs uppercase tracking-wider font-semibold hover:text-white/70 transition-colors ${
                  location.pathname === link.path ? "border-b-2 border-white" : ""
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
              className="text-white hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="whatsapp" onClick={handleWhatsApp} className="gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-sm pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-white text-sm uppercase tracking-wider font-semibold hover:text-white/70 transition-colors py-2 ${
                    location.pathname === link.path ? "border-l-4 border-white pl-4" : "pl-4"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-4 px-4 pt-4 border-t border-white/20">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCall}
                  className="flex-1 text-white border-white hover:bg-white hover:text-black"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
                <Button
                  variant="whatsapp"
                  size="sm"
                  onClick={handleWhatsApp}
                  className="flex-1"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
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
