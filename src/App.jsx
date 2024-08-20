import "./App.css";
import Hero from "./components/Hero";
import Explanation from "./components/ExplanationSection";
import DotPattern from "./components/magicui/dot-pattern";
import Navbar from "./components/Navbar";
import SectionCards from "./components/SectionsCards";
import Footer from "./components/Footer";
import GejalaSection from "./components/GejalaSection";
import DampakSection from "./components/DampakSection";
import MariKitaSection from "./components/MariKitaSection";
import PenyebabSection from "./components/PenyebabSection";
import Qoute from "./components/Qoute";

function App() {
  return (
    <div className="relative min-h-screen">
      <DotPattern className="fixed inset-0 z-0 h-full w-full" />
      <div className="relative z-10">
        <Navbar></Navbar>
        <Hero />
        <Explanation />
        <SectionCards></SectionCards>
        <GejalaSection></GejalaSection>
        <DampakSection></DampakSection>
        <PenyebabSection></PenyebabSection>
        <MariKitaSection></MariKitaSection>
        <Qoute></Qoute>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
