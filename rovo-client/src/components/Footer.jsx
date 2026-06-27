import logo from "../assets/images/logo.jpg";

import {
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>
            <img
              src={logo}
              alt="Betnalal Woodcraft"
              className="h-20 mb-5 object-contain"
            />

            <p className="text-gray leading-relaxed font-body">
              Crafting premium interiors, modular kitchens,
              wardrobes and custom woodwork solutions with
              precision, elegance and timeless design.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="https://www.instagram.com/betnalal?igsh=MXcxNjhqODE0c2Ex"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition hover:bg-amber-700"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition hover:bg-amber-700"
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-display">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray font-body">

              <li>
                <a href="#" className="hover:text-primary transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-display">
              Services
            </h3>

            <ul className="space-y-3 text-gray font-body">

              <li>Modular Kitchens</li>
              <li>Storage Solutions</li>
              <li>Interior Woodwork</li>
              <li>Custom Furniture</li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-display">
              Contact
            </h3>

            <div className="space-y-5 text-gray font-body">

              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-primary" />
                <span>+91 9999999999</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="mt-1 text-primary" />
                <span>info@betnalalwoodcraft.com</span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-primary" />
                <span>
                  Okhla Industrial Area,
                  New Delhi, India
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray text-sm font-body">
            © 2026 Betnalal Woodcraft. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition hover:bg-amber-700"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;