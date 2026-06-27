import step1 from "../assets/images/process1.jpg";
import step2 from "../assets/images/process2.jpg";
import step3 from "../assets/images/process3.jpg";

const steps = [
  {
    number: "01",
    image: step1,
    title: "Consultation & Planning",
    description:
      "Share your vision, space requirements and budget. Our experts will guide you through the possibilities.",
  },
  {
    number: "02",
    image: step2,
    title: "Design & Visualization",
    description:
      "Get customized layouts and realistic 3D designs before production begins.",
  },
  {
    number: "03",
    image: step3,
    title: "Manufacturing & Installation",
    description:
      "Precision manufacturing and professional installation with complete quality assurance.",
  },
];

function Process() {
  return (
    <section className="py-24 bg-[#FDF8F2]">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-5xl font-bold text-charcoal font-display"
          >
            Our Design Process
          </h2>

          <p className="text-gray mt-4 text-lg font-body">
            From concept to completion, we make every step seamless.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group transition-all duration-500 hover:-translate-y-4"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-80 w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 rounded-2xl"></div>
              </div>

              {/* Content Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mx-6 -mt-12 relative z-10">

                {/* Number Circle */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md text-primary font-bold text-xl font-display">
                  {step.number}
                </div>

                <h3 className="text-2xl font-semibold mt-4 mb-4 text-center text-charcoal font-display">
                  {step.title}
                </h3>

                <div className="w-16 h-[2px] bg-primary mx-auto mb-4"></div>

                <p className="text-gray text-center leading-relaxed font-body">
                  {step.description}
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-primary hover:bg-amber-700 text-white px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 font-body font-semibold">
            Talk To A Designer
          </button>
        </div>

      </div>
    </section>
  );
}

export default Process;