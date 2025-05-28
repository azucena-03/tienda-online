import ProductCard from "@/components/cards/ProductCard"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { productos } from "@/utils/data"

function FeaturedSection() {
    return (
        <section className="w-full px-4 md:px-0 pb-20">
            <div className="flex justify-between mb-8">
                <h2 className="text-7xl font-bold leading-[110%] uppercase">
                    Favoritos de la<br /> temporada
                </h2>
                <Button variant={"base"} className="uppercase self-end">
                    Lorem ipsum dolor
                </Button>
            </div>
            <Carousel
                opts={{ align: "start" }}
                className="w-full"
            >
                <CarouselContent className="">
                    {productos.map(producto => (
                        <CarouselItem key={producto.id} className="md:basis-1/2 lg:basis-1/4">
                            <ProductCard producto={producto} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}

export default FeaturedSection
