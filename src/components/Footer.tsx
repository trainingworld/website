import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

import { handleWhatsApp, handleWhatsAppTrainingWorld } from "@/lib/utils";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 items-start">
            <Logo isCentered={false} />
            <p className="text-white/70 text-sm leading-relaxed">
              Official Hyrox Training Club. Bespoke fitness training focused on
              your lifestyle and goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="https://trainingworld.co.in/sitemap.xml"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <a
                  href="tel:+917838526644"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  +91 78385 26644
                </a>
              </li>
              {/* <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@trainingworld.com"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  info@trainingworld.com
                </a>
              </li> */}
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Safdarjung Enclave,
                  <br /> New Delhi, India
                </span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
              Get Started
            </h4>
            <p className="text-white/70 text-sm mb-4">
              Ready to transform your fitness journey? Message us on WhatsApp.
            </p>
            <Button
              onClick={handleWhatsAppTrainingWorld}
              variant="whatsapp"
              size="sm"
              aria-label="Whatsapp Us"
            >
              <WhatsAppIcon />
              WhatsApp Us
            </Button>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Training World. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
