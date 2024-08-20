import Card from "./Card"
import gejala from "../assets/gejala.jpg"
import dampak from "../assets/dampak.jpg"
import penyebab from "../assets/penyebab.jpg"
import marikita from "../assets/marikita.jpg"
function SectionCards(){
    return(
        <section className="pb-56 scroll-mt-72" id="Sections">
        <div className="px-10">
                <div
            className={
                "flex w-full flex-col gap-24 md:gap-10 lg:flex-row items-center content-center justify-center"
            }
            >
                <Card button={true} img={gejala} className="max-w-[300px]" headingText="Beberapa Gejala Gangguan Jiwa" text="" goto="gejala"></Card>
                <Card button={true} img={dampak} className="max-w-[300px]" headingText="Dampak Dari Gangguan Jiwa" text="" goto="dampak"></Card>
                <Card button={true} img={penyebab} className="max-w-[300px]" headingText="Penyebab Gangguan Jiwa" text="" goto="penyebab"></Card>
                <Card button={true} img={marikita} className="max-w-[300px]" headingText="Mari Kita Ciptakan Lingkungan Yang Sehat" text="" goto="marikita"></Card>
            </div>
        </div>
     
        </section>
    )
}

export default SectionCards