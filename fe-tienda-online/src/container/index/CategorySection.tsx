import CategoryCard from "@/components/cards/CategoryCard"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

function CategorySection() {
    return (
        <div>
            <section className="w-full px-4 md:px-0 pb-20">
                <Carousel
                    opts={{ align: "start" }}
                    className="w-full"
                >
                    <h2 className="text-7xl font-bold leading-[110%] uppercase mb-10">
                        Categorías
                    </h2>
                    <CarouselContent className="">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <CategoryCard />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="top-4 left-[80%] md:left-[93%] hover:bg-[#007580] hover:text-white" />
                    <CarouselNext className="top-4 right-0.5 md:right-2.5 hover:bg-[#007580] hover:text-white" />
                </Carousel>
            </section>
        </div>
    )
}

export default CategorySection
