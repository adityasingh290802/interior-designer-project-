import reel1 from "../assets/videos/reel1.mp4";
import reel2 from "../assets/videos/reel2.mp4";
import reel3 from "../assets/videos/reel3.mp4";

import { FaInstagram } from "react-icons/fa";

function InstagramReels() {
  const reels = [
    {
      video: reel1,
      title: "Luxury Modular Kitchen",
    },
    {
      video: reel2,
      title: "Premium Wardrobe Design",
    },
    {
      video: reel3,
      title: "Interior Woodwork Project",
    },
  ];

  return (
    <section className="py-24 bg-[#FDF8F2]">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-primary mb-3 font-body font-semibold">
            Instagram Highlights
          </p>

          <h2
            className="text-5xl font-bold text-charcoal font-display"
          >
            Latest Project Videos
          </h2>

          <p className="text-gray mt-4 max-w-2xl mx-auto font-body">
            Explore our latest modular kitchens, wardrobes and premium
            interior transformations directly from our projects.
          </p>
        </div>

        {/* Videos */}
        <div className="grid md:grid-cols-3 gap-8">

          {reels.map((reel, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <video
                controls
                muted
                preload="metadata"
                className="w-full h-[480px] object-cover"
                onMouseEnter={(e) => {
                  e.currentTarget.currentTime = 0;
                  e.currentTarget.play();
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              >
                <source src={reel.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-charcoal text-center font-display">
                  {reel.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

        {/* Instagram Button */}
        <div className="text-center mt-16">
          <a
            href="https://www.instagram.com/betnalal?igsh=MXcxNjhqODE0c2Ex"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary hover:bg-amber-700 text-white px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 font-body font-semibold"
          >
            <FaInstagram className="text-2xl" />
            Follow Us On Instagram
          </a>
        </div>

      </div>
    </section>
  );
}

export default InstagramReels;