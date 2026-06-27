import heroImage from "../assets/images/hero-kitchen.jpg";

function Hero() {
  return (
    
    <section className="min-h-screen bg-warmIvory flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center w-full">

        <div className="py-12">
          <p className="uppercase tracking-[6px] text-primary mb-6 text-base font-bold font-body">
            Premium Interior Solutions
          </p>

          <h1
            className="text-5xl md:text-7xl font-bold text-charcoal leading-tight font-display"
          >
            Transforming Spaces. Shaping Dreams.
          </h1>

          <p className="mt-8 text-xl text-gray font-body max-w-lg">
            Premium modular kitchens, wardrobes and interior
            solutions designed with precision and elegance.
          </p>

          <div className="mt-10 flex gap-4">
          <a href="#consultation">
            <button className="bg-primary hover:bg-amber-700 text-white px-8 py-4 rounded-full font-body font-semibold transition-all duration-300">
              Get Free Consultation
            </button>
          </a>

            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-body font-semibold transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="Luxury Kitchen"
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;