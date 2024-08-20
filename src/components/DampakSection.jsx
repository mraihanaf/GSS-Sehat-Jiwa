import { Highlight } from "./ui/hero-highlight";
import React from "react";
import NumberTicker from "./magicui/number-ticker";

function DampakSection() {
  return (
    <section className="m-8 md:m-16 mt-56 scroll-mb-56">
      <div className="w-full bg-white/5 rounded-lg shadow-xl pt-28  backdrop-blur-sm pb-28">
        <h1 className="text-center font-bold text-palettedarkgreen text-2xl md:text-3xl mb-28 lg:text-4xl">
          Dampak Dari <br className="md:hidden"/><Highlight>Gangguan Mental</Highlight>
        </h1>
        <div className="flex-row justify text-justify m-10 text-slate-900">
          <p>
            Berdasarkan riset yang dilakukan oleh tim Divisi Psikiatri Anak dan
            Remaja, Fakultas Kesehatan di Universitas Indonesia, mencoba untuk
            memetakan keresahan mental remaja dari seluruh Indonesia melalui
            survey online. Sebanyak <span className="font-bold">95,4%</span> menyatakan bahwa mereka pernah
            mengalami gejala kecemasan, dan <span className="font-bold">88%</span> pernah mengalami gejala depresi
            dalam menghadapi permasalahan selama di usia ini. Selain itu, dari
            seluruh responden, sebanyak <span className="font-bold">96,4%</span> menyatakan kurang memahami cara
            mengatasi stres akibat masalah yang sering mereka alami. Pada
            periode ini. Penyelesaian masalah yang paling sering mereka lakukan
            adalah bercerita pada teman <span className="font-bold">(98,7%)</span>, menghindari masalah tersebut 
            <span className="font-bold"> (94,1%)</span>, mencari informasi tentang cara mengatasi masalah dari
            internet <span className="font-bold">(89,8%)</span>. Namun, sebagian juga berakhir dengan menyakiti
            diri mereka sendiri <span className="font-bold">(51,4%)</span>, atau bahkan menjadi putus asa serta
            ingin mengakhiri hidup <span className="font-bold">(57,8%)</span>.
          </p>
          <h3 className="text-2xl font-bold">
            <br />
            Berdasarkan catatan yang tercatat yang dicatat oleh pihak pencatatan
            kepolisian, sejak tahun 2018 hingga 15 desember 2023 telah tercatat  <NumberTicker value={3618}></NumberTicker> <Highlight>Kasus bunuh diri.</Highlight>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default DampakSection;
