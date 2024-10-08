import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import React from 'react'
import Card from "./Card";
import { Highlight } from "./ui/hero-highlight";
import cemas from "../assets/cemas.jpg"
import emosi from "../assets/emosi.jpg"
import lelah from "../assets/lelah.jpg"
import selfharm from "../assets/self-harm.jpg"
import emosi2 from "../assets/emosi2.jpg"

function GejalaSection() {
  
  const contents = [
    {
      text: "Anak dengan kondisi jiwa yang kurang baik biasanya selalu merasakan ketakutan yang tidak wajar dan muncul secara tiba tiba. Dapat berupa ketakutan terhadap hal umum ataupun hal yang spesifik.",
      headingText: "Ketakutan Berlebihan.",
      id: "1",
      img: cemas
    },
    {
      text: "Bervariasi berdasarkan kondisi kesehatan jiwa anak, dapat berupa kecanduan substansi, kesulitan menahan diri, hingga terganggunya pola hidup sehat.",
      headingText: "Perilaku Negatif.",
      id: "2",
      img: emosi
    },
    {
      text: "Salah satu efek yang paling merugikan dari turunnya kesehatan jiwa anak, hal ini dapat disebabkan karena anak terdistraksi oleh hal lain.",
      headingText: "Menurunnya Prestasi Akademik.",
      id: "3",
      img: lelah
    },
    {
      text: "Dapat terjadi bila seorang anak memiliki pemikiran self punishing, salah satu contoh yang terkenal adalah barcode, dimana sang anak memotong/ melukai bagian tubuh mereka sendiri kebanyakan tangan. Bahkan ada yang membawa hal ini kepada titik extrim untuk bunuh diri merupakan salah satu pilihan akhir untuk mereka yang putus asa terhadap diri mereka sendiri.",
      headingText: "Pikiran Menyakiti Diri Sendiri Hingga Bunuh Diri.",
      id: "4",
      img: selfharm
    },
    {
      text: "Perubahan emosi anak dapat berubah secara drastis dan perubahan ini bersifat dinamis serta dipengaruhi oleh berbagai faktor, seperti lingkungan, hubungan sosial, dan perkembangan psikologis mereka.",
      headingText: "Ketidakstabilan Emosi.",
      id: "5",
      img: emosi2
    },
  ];

  return (
    <section className="m-8 md:m-16" id="gejala">
      <div className="w-full bg-white/5 rounded-lg shadow-xl pt-28  backdrop-blur-sm">
        <h1 className="text-center font-bold text-palettedarkgreen text-2xl md:text-3xl mb-10 lg:text-4xl">
          Beberapa Gejala <br className="md:hidden"/><Highlight>Gangguan Jiwa</Highlight>
        </h1>
        <div className="m-10 text-lg font-medium text-slate-900 lg:text-xl ">
          <h2 className="text-pretty md:text-justify">
            Turunnya kesehatan mental anak dapat menimbulkan masalah fisik
            maupun psikis yang tidak sehat, maka dari itu kenali gejalanya
            sebelum terlambat.
          </h2>
        </div>
        <div className="flex justify-center">
          <Carousel className="w-max max-w-[15rem] md:max-w-2xl">
            <CarouselContent>
              {contents.map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card
                      className=""
                      text={_.text}
                      headingText={_.headingText}
                      img={_.img}
                    ></Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default GejalaSection;
