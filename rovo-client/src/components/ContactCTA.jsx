import {
  FaWhatsapp,
  FaPhoneAlt,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

function ContactCTA() {
  return (
    <section
      id="consultation"
      className="py-16 bg-warmIvory"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden">

          <div className="grid lg:grid-cols-2">

            {/* Left Side */}
            <div className="p-8 lg:p-12">

              <p className="uppercase tracking-[4px] text-primary mb-3 text-sm font-body font-semibold">
                FREE CONSULTATION
              </p>

              <h2
                className="text-4xl md:text-5xl font-bold text-charcoal leading-tight font-display"
              >
                Let's Create
                <br />
                Something Beautiful
              </h2>

              <p className="text-gray mt-5 text-base leading-relaxed font-body">
                From luxury modular kitchens to complete interior
                transformations, our experts help bring your dream
                home to life with precision and craftsmanship.
              </p>

              <div className="mt-6 space-y-3 font-body">

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-primary" />
                  <span className="text-charcoal">Free Design Consultation</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-primary" />
                  <span className="text-charcoal">Premium Quality Materials</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-primary" />
                  <span className="text-charcoal">Customized Interior Solutions</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-primary" />
                  <span className="text-charcoal">Professional Installation</span>
                </div>

              </div>

            </div>

            {/* Right Side */}
            <div className="bg-gradient-to-br from-[#D77A1E] via-primary to-[#F1B56B] text-white p-8 lg:p-12 flex flex-col justify-center">

              <h3 className="text-3xl font-bold mb-6 font-display">
                Get In Touch Today
              </h3>

              <div className="space-y-4">

                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all duration-300 font-body"
                >
                  <FaPhoneAlt className="text-xl" />

                  <div>
                    <p className="text-xs opacity-80">
                      Call Us
                    </p>

                    <p className="font-semibold">
                      +91 99999 99999
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all duration-300 font-body"
                >
                  <FaWhatsapp className="text-xl" />

                  <div>
                    <p className="text-xs opacity-80">
                      WhatsApp
                    </p>

                    <p className="font-semibold">
                      Chat With Our Team
                    </p>
                  </div>
                </a>

              </div>

              <button className="mt-8 bg-white text-primary px-8 py-4 rounded-full font-semibold flex items-center gap-3 w-fit hover:scale-105 transition-all duration-300 font-body">
                Book Free Consultation
                <FaArrowRight />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactCTA;