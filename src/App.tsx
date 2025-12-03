import "./App.css";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import EducationPath from "./components/EducationPath";
import Philosophy from "./components/Philosophy";
import Gallery from "./components/Gallery";
import ExamResults from "./components/ExamResults";
import SchoolTrips from "./components/SchoolTrips";
import Partnerships from "./components/Partnerships";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-lime-300 selection:text-blue-900">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <EducationPath />
      <Philosophy />
      <Gallery />
      <ExamResults />
      <SchoolTrips />
      <Partnerships />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;
