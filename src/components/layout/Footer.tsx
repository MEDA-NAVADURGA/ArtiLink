import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              MyPattu<span className="text-gold">Store</span>
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Handcrafted pattu sarees with authentic traditional designs at affordable prices.
              Each piece tells a story of craftsmanship and heritage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                Home
              </Link>
              <Link to="/products" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                Our Sarees
              </Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                About Us
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/918143858263"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors text-sm"
              >
                <Phone size={16} />
                +91 81438 58263
              </a>
              <a
                href="mailto:navadurgameda84@gmail.com"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors text-sm"
              >
                <Mail size={16} />
                navadurgameda84@gmail.com
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Konanki Village, Andhra Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} MyPattuStore. All rights reserved. Made with ❤️ for traditional craftsmanship.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
