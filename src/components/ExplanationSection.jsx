import { useState } from "react";
import TextRevealByWord from "./magicui/text-reveal";
function Explanation(){
    const penjelasan =
      "**Sehat Jiwa** dalam Gerakan Sekolah Sehat (GSS) adalah pendekatan komprehensif yang bertujuan untuk mendukung perkembangan peserta didik dari segala aspek—fisik, mental, spiritual, dan sosial. Konsep ini menekankan pentingnya keseimbangan emosional dan kesehatan mental, serta kemampuan siswa untuk mengenali dan mengatasi tekanan dengan cara yang sehat. Dengan fokus pada peningkatan kesejahteraan jiwa, GSS menciptakan lingkungan pendidikan yang mendukung pertumbuhan holistik dan mempersiapkan siswa untuk menghadapi tantangan kehidupan dengan ketahanan dan kepercayaan diri.";
    return(
        <section>
            <TextRevealByWord text={penjelasan} className="pb-36">

            </TextRevealByWord>
        </section>
    )
}

export default Explanation