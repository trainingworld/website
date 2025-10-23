import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import {
  handleWhatsAppHyrox,
  handleWhatsAppTrainingWorld,
  handleCall,
} from "@/lib/utils";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
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
              className="text-white hover:bg-white/10 hover:text-white"
            >
              <Phone className="h-5 w-5" />
            </Button>

            {/* Desktop: WhatsApp opens a side sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="whatsapp" size="sm" className="gap-2">
                  <WhatsAppIcon />
                  WhatsApp Us
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black text-white sm:max-w-md"
              >
                <SheetHeader className="text-left">
                  <SheetTitle>Get in touch</SheetTitle>
                  <SheetDescription className="text-white/70 pb-8">
                    Choose how you'd like to connect with us.
                  </SheetDescription>
                </SheetHeader>

                <div className="mt-6 space-y-6">
                  {/* Section A: Hyrox */}
                  <div className="space-y-4">
                    <div className="flex flex-col items-start gap-8">
                      <img
                        src="/logos/HYROX-Logo.svg"
                        alt="HYROX Logo"
                        className="h-8 w-auto"
                      />
                      <div>
                        {/* <h3 className="text-lg font-semibold">HYROX</h3> */}
                        <p className="text-sm text-white/70">
                          The world's fastest growing fitness racing series.
                          Race against the clock in this unique combination of
                          running and functional fitness.
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleWhatsAppHyrox}
                      className="w-full text-white border-white hover:bg-white hover:text-black"
                    >
                      Learn More About HYROX
                    </Button>
                  </div>

                  {/* Section B: Training World */}
                  <div className="space-y-4 pt-16">
                    <div className="flex flex-col items-start gap-4">
                      <Logo isCentered={false} />
                      <div>
                        {/* <h3 className="text-lg font-semibold">
                          Training World
                        </h3> */}
                        <p className="text-sm text-white/70">
                          Your premier destination for functional fitness
                          training, HYROX preparation, and personalized coaching
                          to help you achieve your goals.
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="whatsapp"
                      size="sm"
                      onClick={handleWhatsAppTrainingWorld}
                      className="w-full gap-2"
                    >
                      <WhatsAppIcon />
                      Contact Training World
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
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
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleWhatsAppHyrox}
                  className="flex-1 text-white border-white hover:bg-white hover:text-black"
                >
                  <WhatsAppIcon />
                  Learn about Hyrox
                </Button>
                <Button
                  variant="whatsapp"
                  size="sm"
                  onClick={handleWhatsAppTrainingWorld}
                  className="flex-1"
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
