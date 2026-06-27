import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Process from "../components/Process";
import PortfolioPreview from "../components/PortfolioPreview";
import InstagramFeed from "../components/InstagramFeed";
import ContactForm from "../components/ContactCTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <PortfolioPreview />
      <WhyChooseUs />
      <InstagramFeed />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;