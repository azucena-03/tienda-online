import { Button } from "@/components/ui/button"
import TestimonialSection from "@/container/aboutus/TestimonialSection"
import AdvantagesSection from "@/container/index/AdvantagesSection"
import { ArrowRight } from "lucide-react"

function AboutUsPage() {
    return (
        <div className="px-4 md:px-0 py-6">
            <div className="grid grid-cols-2 gap-x-12 mb-14">
                <img src="/aboutus.webp" alt="sobre nosotros" className="rounded-md" />
                <div className="flex flex-col gap-y-6 self-center">
                    <h2 className="text-3xl font-bold capitalize">Lorem ipsum dolor sit amet consectetur <br />  adipisicing elit. Dolorum, deleniti!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet cupiditate, sed sequi quidem id molestias?
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta iste excepturi, molestias odio quis laudantium dolor facilis fugit.</p>
                    <Button className="bg-[#232321] uppercase flex justify-between">
                        <span>Unete a nosotros</span>
                        <ArrowRight />
                    </Button>
                </div>
            </div>

            <AdvantagesSection />
            <TestimonialSection />
        </div>
    )
}

export default AboutUsPage
