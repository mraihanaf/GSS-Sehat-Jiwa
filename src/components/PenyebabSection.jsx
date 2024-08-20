import { Highlight } from "./ui/hero-highlight";
import React from "react";
import NumberTicker from "./magicui/number-ticker";

function PenyebabSection() {
  return (
    <section className="m-8 md:m-16 mt-56 scroll-mb-56" id="penyebab">
      <div className="w-full bg-white/5 rounded-lg shadow-xl pt-28 backdrop-blur-sm pb-28">
        <h1 className="text-center font-bold text-palettedarkgreen text-2xl md:text-3xl mb-28 lg:text-4xl">
          Penyebab <br className="md:hidden"/><Highlight>Gangguan Jiwa</Highlight>
        </h1>
        <div className="flex flex-col md:flex-row md:justify-around text-justify m-10 text-slate-900 space-y-10 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">Faktor Lingkungan</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>
                <strong>Pengaruh negatif dari teman:</strong> Tekanan sebaya merupakan salah satu tantangan yang dialami semua anak dan remaja, di mana mereka sering kali sulit menolak ajakan dari teman-teman meskipun mengetahui bahwa itu adalah hal yang negatif. Perilaku anak zaman sekarang seperti FOMO dan YOLO semakin memperburuk situasi ini.
              </li>
              <li>
                <strong>Kekurangan perhatian dari orang tua:</strong> Parenting adalah keterampilan yang sangat penting untuk dimiliki oleh semua orang tua. Sayangnya, masih banyak yang berpikir bahwa keterampilan ini akan datang dengan sendirinya seperti insting, dan tidak terlalu penting untuk dipelajari. Namun, orang tua adalah suar bagi anak-anak mereka untuk menuntun mereka ke arah yang benar.
              </li>
              <li>
                <strong>Perundungan (bullying):</strong> Pengalaman buruk seperti perundungan, baik secara fisik maupun psikologis, dapat meninggalkan luka emosional yang mendalam dan berkontribusi pada gangguan jiwa.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">Faktor Biologis & Psikologis</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>
                <strong>Trauma generasi:</strong> Trauma ini dapat diturunkan dari orang tua melalui dua cara, yaitu secara genetik dan kultural. Secara genetik, anak akan lebih rentan terhadap hormon kortisol. Secara kultural, trauma ini biasanya berakar dari pengalaman seperti rasisme atau PTSD dari perang, yang secara tidak sadar membawa sifat negatif kepada anak.
              </li>
              <li>
                <strong>Penyalahgunaan substansi:</strong> Penggunaan psikotropika seperti LSD, psilocybin, atau MDMA dapat menyebabkan gejala psikotik seperti halusinasi, paranoia, atau delusi. Penggunaan jangka panjang bahkan bisa menyebabkan gangguan psikotik kronis seperti skizofrenia, dan memperburuk gangguan kejiwaan lainnya seperti depresi atau bipolar.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PenyebabSection;
