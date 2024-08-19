import TypingAnimation from "./magicui/typing-animation";
import GradualSpacing from "./magicui/gradual-spacing";
import WordRotate from "./magicui/word-rotate";

function Hero() {
  let apaKabarNames = ["Diriku?", "Aku?", "Saya?", "Jiwaku?"];

  return (
    <section
      id="Home"
      className="h-screen flex flex-col items-center justify-center"
    >
      <div className=" mt-14">
      <TypingAnimation
  className="font-bold text-5xl lg:text-6xl text-center"
  text="Apa Kabar, "
>
  <WordRotate words={apaKabarNames} className=" text-palettedarkgreen inline"/>
</TypingAnimation>
      </div>
      <div className="mt-6 text-center">
        <h2 className="font-semibold">Gerakan <span className="">Sekolah Sehat</span></h2>
        <h2 className="">
          Tema <span className="font-semibold">Sehat Jiwa</span>
        </h2>
      </div>
      
    </section>
  );
}

export default Hero;
