
import AdvantagesSection from "@/container/index/AdvantagesSection"
import CategorySection from "@/container/index/CategorySection"
import FeaturedSection from "@/container/index/FeaturedSection"
import HeroSection from "@/container/index/Hero"
import PoductsSection from "@/container/index/PoductsSection"
import TestimonialSection from "@/container/index/TestimonialSection"


function IndexPage() {
    return (
        <>
            <HeroSection />
            <AdvantagesSection />
            <FeaturedSection />
            <CategorySection />
            <PoductsSection />
            <TestimonialSection />
        </>
    )
}

export default IndexPage
