import AppBreadcrumb from "@/components/common/AppBreadcrumb"

function AboutUsPage() {
    return (
        <section className="px-4 pb-16 md:px-0">
            <AppBreadcrumb />
            <div className="flex justify-center">
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-2xl font-medium self-start uppercase pb-2">¿Quiénes somos?</h2>
                    <p className="text-xs text-left font-light leading-relaxed">
                        Somos un equipo pequeño pero apasionado que busca ofrecerte zapatillas cómodas, con estilo y calidad. Queremos que disfrutes cada paso, con compras fáciles y entregas rápidas. ¡Gracias por elegirnos para caminar juntos!
                    </p>
                    <img src="/about-us.jpg" alt="sobre nosotros" className="h-80 w-full object-cover rounded-xs opacity-75" />
                </div>
            </div>
        </section>
    )
}

export default AboutUsPage
