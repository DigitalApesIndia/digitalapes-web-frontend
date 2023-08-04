import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import ServicesOverview from "../components/ServicesOverview";
import ProjectsSection from "../components/ProjectsSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <ServicesOverview />
      <ProjectsSection />
      <ContactForm />
      <Footer />
    </>
  );
}
