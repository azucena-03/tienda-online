import { categorias, redes } from "@/utils/data"

function Footer() {
    return (
        <footer className="container mx-auto mb-12">
            <div className="bg-[#007580] rounded-[48px] ">
                <div className="px-[72px] pt-16 pb-10 text-white grid grid-cols-2">
                    <div className="max-w-[512px]">
                        <h2 className="text-5xl font-bold uppercase pb-4">Lorem ipsum dolor amet adipisicing</h2>
                        <p className="text-[#E7E7E3] text-sm">Lorem ipsum dolor sit amet Lorem, ipsum dolor
                        </p>
                    </div>
                    <div className="flex items-center place-self-center">
                        <img src="/logo-icon.png" alt="logo" />
                        <span className="uppercase font-black text-6xl">shalo</span>
                    </div>
                </div>
                <div className="bg-[#232321] text-[#E7E7E3] grid grid-cols-5 p-10 gap-x-28 rounded-[48px]">
                    <div className="col-span-2">
                        <h3 className="text-[#FFA52F] font-semibold mb-4">Sobre Nosotros</h3>
                        <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat reiciendis mollitia sint, labore at et Lorem ipsum dolor sit amet consectetur.</p>
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
        // <footer className="container mx-auto mb-16">
        //     <div className="relative">
        //         <div className="bg-[#007580] rounded-[48px] px-[72px] pt-16 pb-52 text-white grid grid-cols-2">
        //             <div className="max-w-[512px]">
        //                 <span className="text-5xl font-bold uppercase pb-4">Lorem ipsum dolor amet adipisicing</span>
        //                 <p className="text-[#E7E7E3]">Lorem ipsum dolor sit amet Lorem, ipsum dolor
        //                 </p>
        //             </div>
        //             <span className="font-black uppercase text-6xl place-self-center">shalo</span>
        //         </div>
        //         <div className="bg-[#232321] text-[#E7E7E3] grid grid-cols-5 p-10 gap-x-32 rounded-[48px] absolute top-7/12">
        //             <div className="col-span-2">
        //                 <h3 className="text-2xl text-[#FFA52F] font-semibold mb-4">Sobre Nosotros</h3>
        //                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat reiciendis mollitia sint, labore at et Lorem ipsum dolor sit amet consectetur.</p>
        //             </div>
        //             <div>
        //                 <h3 className="text-2xl text-[#FFA52F] font-semibold mb-4">Categorias</h3>
        //                 <div className="flex flex-col">
        //                     {categorias.map(categoria => (
        //                         <a key={categoria.id} href="#" target="_blank">
        //                             {categoria.nombre}
        //                         </a>
        //                     ))}
        //                 </div>
        //             </div>
        //             <div>
        //                 <h3 className="text-2xl text-[#FFA52F] font-semibold mb-4">Compañia</h3>
        //                 <div className="flex flex-col">
        //                     <a href="#" target="_blank">
        //                         Preguntas Frecuentes
        //                     </a>
        //                     <a href="#" target="_blank">
        //                         Contacto
        //                     </a>
        //                 </div>
        //             </div>
        //             <div>
        //                 <h3 className="text-2xl text-[#FFA52F] font-semibold mb-4">Siguenos</h3>
        //                 <div className="flex gap-x-6">
        //                     {redes.map(red => (
        //                         <a key={red.nombre} href="#" target="_blank">
        //                             <img src={red.icono} alt={red.nombre} />
        //                         </a>
        //                     ))}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </footer >
    )
}

export default Footer
