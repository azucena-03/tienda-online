import AdvantagesSection from "@/container/index/AdvantagesSection"
import FeaturedSection from "@/container/index/FeaturedSection"
import HeroSection from "@/container/index/Hero"
import NewSection from "@/container/index/NewSection"
import PromoBanner from "@/container/index/PromoBanner"
import SellersSection from "@/container/index/SellersSection"


function IndexPage() {
    return (
        <>
            <HeroSection />
            <AdvantagesSection />
            <NewSection />
            <SellersSection />
            <PromoBanner />
            <FeaturedSection />
        </>
    )
}

export default IndexPage
