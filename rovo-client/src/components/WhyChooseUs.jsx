import {
  FaUsers,
  FaShieldAlt,
  FaIndustry,
  FaTruck,
  FaPencilRuler,
  FaRulerCombined,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUsers />,
    title: "500+",
    subtitle: "Happy Customers",
  },
  {
    icon: <FaShieldAlt />,
    title: "10 Years",
    subtitle: "Warranty Support",
  },
  {
    icon: <FaIndustry />,
    title: "15,000+",
    subtitle: "Sq. Ft. Production Facility",
  },
  {
    icon: <FaTruck />,
    title: "45 Days",
    subtitle: "Delivery & Installation",
  },
  {
    icon: <FaPencilRuler />,
    title: "50+",
    subtitle: "Design Experts",
  },
  {
    icon: <FaRulerCombined />,
    title: "100%",
    subtitle: "Customized Solutions",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <h2
            className="text-5xl font-bold text-charcoal mb-5 font-display"
          >
            Why Choose Betnalal Woodcraft?
          </h2>

          <p className="text-gray text-lg max-w-3xl mx-auto font-body">
            Premium modular kitchens, wardrobes and custom interior
            solutions crafted with precision, durability and elegance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="w-28 h-28 rounded-full border-2 border-primary flex items-center justify-center text-primary text-4xl mb-5 transition hover:bg-primary hover:text-white">
                {item.icon}
              </div>

              <h3 className="text-3xl font-semibold text-charcoal font-display">
                {item.title}
              </h3>

              <p className="text-gray mt-2 font-body">
                {item.subtitle}
              </p>
            </div>
          ))}

        </div>

        <div className="text-center mt-16">
          <button className="bg-primary text-white px-10 py-4 rounded-full hover:scale-105 transition hover:bg-amber-700 font-body font-semibold">
            Talk To A Designer
          </button>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;