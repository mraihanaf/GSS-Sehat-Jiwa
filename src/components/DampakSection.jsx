import { Highlight } from "./ui/hero-highlight";
import React from "react";

function DampakSection() {
  return (
    <section className="m-8 md:m-16 mt-56 scroll-mb-56">
      <div className="w-full bg-white/5 rounded-lg shadow-xl pt-28  backdrop-blur-sm pb-28">
        <h1 className="text-center font-bold text-palettedarkgreen text-3xl mb-28 lg:text-4xl">
          Dampak Dari <Highlight>Gangguan Mental</Highlight>
        </h1>
        <div className="flex-row justify text-justify m-10 text-slate-900">
          <p>
            Berdasarkan riset yang dilakukan oleh tim Divisi Psikiatri Anak dan
            Remaja, Fakultas Kesehatan di Universitas Indonesia, mencoba untuk
            memetakan keresahan mental remaja dari seluruh Indonesia melalui
            survey online. Sebanyak 95,4% menyatakan bahwa mereka pernah
            mengalami gejala kecemasan, dan 88% pernah mengalami gejala depresi
            dalam menghadapi permasalahan selama di usia ini. Selain itu, dari
            seluruh responden, sebanyak 96,4% menyatakan kurang memahami cara
            mengatasi stres akibat masalah yang sering mereka alami. Pada
            periode ini. Penyelesaian masalah yang paling sering mereka lakukan
            adalah bercerita pada teman (98,7%), menghindari masalah tersebut
            (94,1%), mencari informasi tentang cara mengatasi masalah dari
            internet (89,8%). Namun, sebagian juga berakhir dengan menyakiti
            diri mereka sendiri (51,4%), atau bahkan menjadi putus asa serta
            ingin mengakhiri hidup (57,8%).
          </p>
          <h3 className="text-2xl font-bold">
            <br />
            Berdasarkan catatan yang tercatat yang dicatat oleh pihak pencatatan
            kepolisian, sejak tahun 2018 hingga 15 desember 2023 telah tercatat
            3.618 kasus bunuh diri
          </h3>
        </div>
      </div>
    </section>
  );
}

export default DampakSection;
