import { redes } from "@/utils/data"
import { Separator } from "../ui/separator"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="pt-14">
            <div className="bg-[url('/hero-slide-2.png')] bg-cover bg-no-repeat bg-[center_-35%] bg-fixed bg-gray-400 bg-blend-multiply h-56 flex justify-center items-center">
                <span className="text-white italic capitalize font-bold text-center text-2xl text-shadow-lg/20 md:text-3xl lg:text-4xl px-4">"Pasos firmes, estilo único: encuentra tus zapatillas perfectas"</span>
            </div>

            <div className="p-4 pt-14 pb-8 space-y-6 container mx-auto">
                <div className="flex flex-col gap-y-6 md:flex-row md:justify-between">
                    <span className="uppercase font-black text-xl italic">shalo</span>

                    <div className="flex flex-col sm:flex-row gap-x-6 gap-y-2 capitalize text-sm font-semibold">
                        <Link to="/sobre-nosotros" className="hover:underline">
                            sobre nosotros
                        </Link>
                        <Link to="/productos" className="hover:underline">
                            productos
                        </Link>
                        <Link to="#" className="hover:underline">
                            Contacto
                        </Link>
                    </div>

                    <div className="flex gap-x-6">
                        {redes.map(red => (
                            <a key={red.nombre} href="#" target="_blank">
                                <img src={red.icono} alt={red.nombre} className="w-6" />
                            </a>
                        ))}
                    </div>
                </div>
                <Separator className="bg-primary" />
                <div className="text-center md:text-end">
                    <Link to="#" className="text-sm font-semibold hover:underline">
                        Preguntas Frecuentes
                    </Link>
                </div>
            </div>
        </footer >
    )
}

export default Footer
