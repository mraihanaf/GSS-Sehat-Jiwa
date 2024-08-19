import "./App.css";
import Hero from "./components/Hero";
import Explanation from "./components/ExplanationSection";
import DotPattern from "./components/magicui/dot-pattern";

function App() {
  return (
    <div className="relative min-h-screen">
      <DotPattern className="absolute inset-0 z-0" />
      <div className="relative z-10">
        <Hero />
        <Explanation />
      </div>
    </div>
  );
}

export default App;
