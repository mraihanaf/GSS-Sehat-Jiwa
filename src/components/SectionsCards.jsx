import Card from "./Card"
function SectionCards(){
    return(
        <section className="pb-56 scroll-mt-72" id="Sections">
        <div className="px-10">
                <div
            className={
                "flex w-full flex-col gap-24 md:gap-10 lg:flex-row items-center content-center justify-center"
            }
            >
                <Card button={true} className="max-w-[300px]"></Card>
                <Card button={true} className="max-w-[300px]"></Card>
                <Card button={true} className="max-w-[300px]"></Card>
                <Card button={true} className="max-w-[300px]"></Card>
            </div>
        </div>
     
        </section>
    )
}

export default SectionCards