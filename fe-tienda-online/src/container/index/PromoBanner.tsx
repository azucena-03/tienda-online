
function PromoBanner() {
    return (
        <div>
            <div className="hidden md:grid h-32 relative rounded-2xl overflow-hidden mb-6 bg-gradient-to-t from-cerulean-blue-100 from-60% to-cerulean-blue-200 content-center">
                <img src="/home-banner.webp" alt="promo banner" className="object-center w-1/4 object-cover -rotate-45 ml-auto" />
                <div className="absolute top-11 left-4 z-10">
                    <h2 className="text-cerulean-blue-800 font-bold text-base lg:text-xl">En tienda o en línea, tu comodidad y estilo son nuestra prioridad</h2>
                    <p className="text-primary-foreground font-light text-xs">la mejor experiencia para que camines con confianza y estilo. ¡Visítanos y siente la diferencia! </p>
                </div>
                <img src="/discount-percent.svg" className="absolute w-1/6 -top-16 left-1/3" />
                <span className="text-[11rem] font-black absolute -top-20 left-1/2 text-cerulean-blue-200">30</span>
            </div>
        </div>
    )
}

export default PromoBanner
