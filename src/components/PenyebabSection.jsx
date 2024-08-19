import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import Card from "./Card"
import { Highlight } from "./ui/hero-highlight"

function PenyebabSection(){


    return(
        <section className="m-16">
            <div className="w-full bg-white/5 rounded-lg shadow-xl pt-28  backdrop-blur-sm pb-28">
                <h1 className="text-center font-bold text-palettedarkgreen text-3xl mb-10 lg:text-4xl">Beberapa Penyebab <Highlight>Gangguan Mental</Highlight></h1>
                <div className="flex justify-center">
                    <Carousel className="w-max max-w-[15rem] md:max-w-2xl">
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                <Card className=""></Card>
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
    )
}

export default PenyebabSection