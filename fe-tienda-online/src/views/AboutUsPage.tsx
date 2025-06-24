import AppBreadcrumb from "@/components/common/AppBreadcrumb"

function AboutUsPage() {
    return (
        <section className="px-4 md:px-0">
            <AppBreadcrumb />
            <div className="flex justify-center">
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-2xl font-medium self-start uppercase">¿Quiénes somos?</h2>
                    <p className="text-xs text-left leading-relaxed">
                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet cupiditate, sed sequi quidem id molestias?</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta iste excepturi, molestias odio quis laudantium dolor facilis fugit.</span>
                    </p>
                    <img src="/aboutus.webp" alt="sobre nosotros" className="rounded-xs" />
                </div>
            </div>
        </section>
    )
}

export default AboutUsPage
