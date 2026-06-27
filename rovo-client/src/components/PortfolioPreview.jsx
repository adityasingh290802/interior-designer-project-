import portfolio1 from "../assets/images/portfolio1.jpg";
import portfolio2 from "../assets/images/portfolio2.jpg";
import portfolio3 from "../assets/images/portfolio3.jpg";
import portfolio4 from "../assets/images/portfolio4.jpg";

const projects = [
  {
    image: portfolio1,
    title: "Luxury Modular Kitchen",
  },
  {
    image: portfolio2,
    title: "Premium Wardrobe Design",
  },
  {
    image: portfolio3,
    title: "Modern TV Unit",
  },
  {
    image: portfolio4,
    title: "Elegant Bedroom Interior",
  },
];

function PortfolioPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-primary mb-3 font-body font-semibold">
            Our Portfolio
          </p>

          <h2
            className="text-5xl font-bold text-charcoal font-display"
          >
            Crafted Spaces That Inspire
          </h2>

          <p className="text-gray mt-4 max-w-2xl mx-auto font-body">
            Discover beautifully crafted interiors designed with
            precision, elegance, and functionality.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl group cursor-pointer shadow-lg"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 transition-all duration-500">

                <h3 className="text-white text-2xl font-semibold mb-3 font-display">
                  {project.title}
                </h3>

                <button className="bg-primary text-white px-5 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 font-body font-semibold hover:bg-amber-700">
                  View Project
                </button>

              </div>
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="text-center mt-14">
          <button className="bg-primary hover:bg-amber-700 text-white px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 font-body font-semibold">
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
}

export default PortfolioPreview;