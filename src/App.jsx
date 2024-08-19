import "./App.css";
import Hero from "./components/Hero";
import Explanation from "./components/ExplanationSection";
import DotPattern from "./components/magicui/dot-pattern";
import Navbar from "./components/Navbar";
import SectionCards from "./components/SectionsCards";
import Footer from "./components/Footer";
import PenyebabSection from "./components/PenyebabSection";
import DampakSection from "./components/DampakSection";
function App() {
  return (
    <div className="relative min-h-screen">
      <DotPattern className="fixed inset-0 z-0 h-full w-full" />
      <div className="relative z-10">
        <Navbar></Navbar>
        <Hero />
        <Explanation />
        <SectionCards></SectionCards>
        <PenyebabSection></PenyebabSection>
        <DampakSection></DampakSection>
        <Footer></Footer>
        
      </div>
    </div>
  );
}

export default App;
