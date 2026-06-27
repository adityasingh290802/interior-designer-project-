import kitchenImg from "../assets/images/kitchen.jpg";
import storageImg from "../assets/images/storage.jpg";
import woodworkImg from "../assets/images/woodwork.jpg";

const services = [
  {
    title: "Modular Kitchens",
    image: kitchenImg,
    description:
      "Luxury modular kitchens crafted with premium materials and modern functionality.",
  },
  {
    title: "Storage Solutions",
    image: storageImg,
    description:
      "Smart wardrobes and storage systems designed for elegance and organization.",
  },
  {
    title: "Interior Woodwork",
    image: woodworkImg,
    description:
      "Custom woodwork, paneling, TV units and furniture tailored to your lifestyle.",
  },
];

function Services() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-primary mb-4 font-body font-semibold">
            Our Services
          </p>

          <h2
            className="text-5xl font-bold text-charcoal font-display"
          >
            Crafted For Modern Living
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-charcoal font-display">
                  {service.title}
                </h3>

                <p className="text-gray mb-6 font-body">
                  {service.description}
                </p>

                <button className="text-primary font-semibold font-body hover:text-amber-700 transition">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;