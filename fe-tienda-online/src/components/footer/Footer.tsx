import { FacebookIcon, InstagramIcon, TiktokIcon, XIcon } from "@/assets"
import { Separator } from "../ui/separator"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="mt-14 bg-card">
            <div className="bg-[url('/hero-slide-2.png')] bg-cover bg-no-repeat bg-[center_-35%] bg-fixed bg-gray-400 bg-blend-multiply h-56 flex justify-center items-center">
                <span className="text-white italic capitalize font-bold text-center text-2xl text-shadow-lg/20 md:text-3xl lg:text-4xl px-4">"Pasos firmes, estilo único: encuentra tus zapatillas perfectas"</span>
            </div>

            <div className="p-4 pt-14 pb-8 space-y-6 container lg:max-w-[75rem] mx-auto">
                <div className="space-y-4">
                    <div className="flex flex-wrap sm:flex-row gap-x-8 gap-y-2 capitalize text-xs">
                        <Link to="/sobre-nosotros" className="tracking-tight hover:underline">
                            sobre nosotros
                        </Link>
                        <Link to="/productos" className="tracking-tight hover:underline">
                            productos
                        </Link>
                        <Link to="#" className="tracking-tight hover:underline">
                            Preguntas Frecuentes
                        </Link>
                    </div>

                    <span className="text-caption text-xs">Contacto: (01)434-6576 | contacto@shalo.com</span>
                </div>
                <Separator className="bg-[#434346]" />
                <div className="flex justify-between items-center text-caption">
                    <span className="uppercase font-black text-xl italic hidden md:block">shalo<span className="text-brand-accent lowercase">.com</span></span>

                    <div className="flex gap-x-6">
                        <FacebookIcon />
                        <InstagramIcon />
                        <XIcon />
                        <TiktokIcon />
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
