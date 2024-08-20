import React from "react";
import { AnimatedBeamDemo } from "./BeamComponent";


function MariKitaSection() {
  return (
    <section className="m-8 md:m-16 mt-56 scroll-mb-56" id="marikita">
      <div className="w-full bg-white/5 rounded-lg shadow-xl pt-28  backdrop-blur-sm pb-28">
        <h1 className="text-center font-bold text-palettedarkgreen text-2xl md:text-3xl -mb-10 lg:text-4xl">
          Mari Kita Ciptakan <br className="md:hidden"/>Lingkungan Yang Sehat 
        </h1>
        <div className="flex-row justify text-justify m-10 text-slate-900">
          <AnimatedBeamDemo></AnimatedBeamDemo>
          <p className="md:text-center md:text-base">
            Dengan memastikan bahwa kita memiliki lingkungan yang sehat di berbagai aspek kehidupan kita, kita dapat mengurangi risiko gangguan jiwa.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MariKitaSection;
