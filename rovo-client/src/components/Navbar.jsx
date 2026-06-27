import logo from "../assets/images/logo.jpg";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

       
        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="Betnalal Woodcraft"
            className="h-14 w-auto object-contain"
          />

          <div>
            <h1 className="text-xl font-bold text-charcoal font-display">
              BETNALAL
            </h1>

            <p className="text-xs tracking-[3px] text-primary font-body">
              WOODCRAFT
            </p>
          </div>

        </div>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-charcoal font-body">

          <a
            href="#"
            className="hover:text-primary transition"
          >
            Home
          </a>

          <a
            href="#"
            className="hover:text-primary transition"
          >
            About
          </a>

          <a
            href="#"
            className="hover:text-primary transition"
          >
            Services
          </a>

          <a
            href="#"
            className="hover:text-primary transition"
          >
            Portfolio
          </a>

          <a
            href="#"
            className="hover:text-primary transition"
          >
            Contact
          </a>

        </div>

        {/* CTA */}
        <a href="#consultation">
          <button className="bg-primary hover:bg-amber-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 font-body font-semibold">
            Book Consultation
          </button>
        </a>

      </div>
    </nav>
  );
}

export default Navbar;