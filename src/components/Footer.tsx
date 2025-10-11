import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

import { handleWhatsApp } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Training World</h3>
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
                  to="/the-space"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  The Space
                </Link>
              </li>
              <li>
                <Link
                  to="/who-needs-us"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Who Needs Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  About Me
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
                  href="tel:+919999999999"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@trainingworld.com"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  info@trainingworld.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">Delhi NCR, India</span>
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
            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] text-white px-6 py-3 text-xs font-bold uppercase tracking-wide hover:bg-[#20BA5A] transition-all hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </button>
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
