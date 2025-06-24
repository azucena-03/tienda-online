
function PromoBanner() {
    return (
        <div className="hidden md:grid h-32 relative rounded-2xl overflow-hidden mb-6">
            <img src="/home-banner.jpg" alt="promo banner" className="h-[inherit] w-full object-cover object-[0px_-375px] rounded-2xl opacity-85" />
            <div className="absolute top-11 left-4">
                <h2 className="text-primary font-bold md:text-lg lg:text-xl text-shadow-lg">En tienda o en línea, tu comodidad y estilo son nuestra prioridad</h2>
                <p className="text-primary text-sm text-shadow-lg">la mejor experiencia para que camines con confianza y estilo. ¡Visítanos y siente la diferencia! </p>
            </div>
        </div>
    )
}

export default PromoBanner
