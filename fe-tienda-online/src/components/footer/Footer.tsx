import { categorias, redes } from "@/utils/data"

function Footer() {
    return (
        <footer className="container mx-auto mb-12 px-4 md:px-0">
            <div className="bg-[#007580] rounded-3xl lg:rounded-[48px] ">
                <div className="p-4 md:p-[72px] text-white grid md:grid-cols-2 gap-y-8">
                    <div className="max-w-[512px]">
                        <h2 className="text-3xl md:text-5xl font-bold md:uppercase mb-2 lg:pb-4">Lorem ip dolor <br />
                            Amet adipisicing</h2>
                        <p className="text-[#E7E7E3] text-sm">Lorem ipsum dolor sit amet Lorem.
                        </p>
                    </div>
                    <div className="flex items-center lg:place-self-center">
                        <img src="/logo-icon.png" alt="logo" className="hidden lg:block" />
                        <span className="uppercase font-black text-6xl">shalo</span>
                    </div>
                </div>
                <div className="bg-[#232321] text-[#E7E7E3] grid lg:grid-cols-5 px-4 py-6 md:p-10 gap-y-10 gap-x-28 rounded-3xl lg:rounded-[48px]">
                    <div className="lg:col-span-2">
                        <h3 className="text-[#FFA52F] font-semibold mb-4">Sobre Nosotros</h3>
                        <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat reiciendis mollitia sint, labore at et Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div>
                        <h3 className="text-[#FFA52F] font-semibold mb-4">Categorias</h3>
                        <div className="flex flex-col">
                            {categorias.map(categoria => (
                                <a key={categoria.id} href="#" target="_blank" className="text-sm underline">
                                    {categoria.nombre}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-[#FFA52F] font-semibold mb-4">Compañia</h3>
                        <div className="flex flex-col">
                            <a href="#" target="_blank" className="text-sm underline">
                                Preguntas Frecuentes
                            </a>
                            <a href="#" target="_blank" className="text-sm underline">
                                Contacto
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-[#FFA52F] font-semibold mb-4">Siguenos</h3>
                        <div className="flex gap-x-6">
                            {redes.map(red => (
                                <a key={red.nombre} href="#" target="_blank">
                                    <img src={red.icono} alt={red.nombre} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
