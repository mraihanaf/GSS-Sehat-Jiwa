import TypingAnimation from "./magicui/typing-animation";
import { useState,  } from "react";

function Hero() {
  let apaKabarNames = ["Diriku", "Aku", "Saya", "Jiwaku"];
  const [name, nameSet] = useState(apaKabarNames[0]);

  return (
    <section
      id="hero"
      className="h-screen flex flex-col items-center justify-center"
    >
      <div className="-mt-10">
        <TypingAnimation
          className="font-bold text-5xl text-center"
            text={`Apa, Kabar ${name}?`}
        >
        </TypingAnimation>
      </div>
      <div className="mt-6 text-center">
        <h2 className="font-semibold">Gerakan Sekolah Sehat</h2>
        <h2 className="">
          Tema <span className="font-semibold">Sehat Jiwa</span>
        </h2>
      </div>
    </section>
  );
}

export default Hero;
