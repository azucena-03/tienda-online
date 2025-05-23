import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

function TestimonialCard() {
    return (
        <article className="bg-white rounded-md shadow-md">
            <div className="flex items-start p-8">
                <div className="flex flex-col gap-y-2 w-2xs">
                    <h3 className="text-xl font-bold">Lorem dolor</h3>
                    <p className="text-sm text-[#232321] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="flex gap-x-5">
                        <div className="flex gap-0.5">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <img key={index} src="/star-rate.svg" alt="star rate" />
                            ))}
                        </div>
                        <span className="text-sm text-[#232321] font-bold">5.0</span>
                    </div>
                </div>
                <Avatar className="w-16 h-16">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <img src="/review-1.png" alt="review" className="rounded-b-md" />
        </article>
    )
}

function TestimonialSection() {
    return (
        <section className="w-full px-4 md:px-0 pb-20">
            <div className="flex justify-between mb-8">
                <h2 className="text-7xl font-bold leading-[110%] uppercase">
                    calificaciones
                </h2>
                <Button variant={"base"} className="uppercase self-end">
                    Ver más
                </Button>
            </div>

            <div className="grid grid-cols-3 gap-x-4">
                {Array.from({ length: 3 }).map((_, index) => (
                    <TestimonialCard key={index} />
                ))}
            </div>

        </section>
    )
}

export default TestimonialSection
