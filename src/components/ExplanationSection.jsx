import { useState } from "react";
import TextRevealByWord from "./magicui/text-reveal";
function Explanation(){
    const penjelasan = `Sehat Jiwa bertujuan untuk meningkatkan perkembangan kesehatan  fisik, mental, spiritual, dan sosial sehingga mampu menyadari kemampuan sendiri, mengatasi tekanan, bekerja/belajar secara optimal, dan memberikan kontribusi untuk komunitasnya.`;
    return(
        <section id="About">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F8FCFB" fillOpacity="1" d="M0,192L34.3,181.3C68.6,171,137,149,206,160C274.3,171,343,213,411,213.3C480,213,549,171,617,138.7C685.7,107,754,85,823,69.3C891.4,53,960,43,1029,69.3C1097.1,96,1166,160,1234,170.7C1302.9,181,1371,139,1406,117.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            <div className="bg-palettewhite">
            <TextRevealByWord text={penjelasan} className="pb-36">

            </TextRevealByWord>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F8FCFB" fillOpacity="1" d="M0,256L60,218.7C120,181,240,107,360,90.7C480,75,600,117,720,117.3C840,117,960,75,1080,48C1200,21,1320,11,1380,5.3L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </section>
    )
}

export default Explanation