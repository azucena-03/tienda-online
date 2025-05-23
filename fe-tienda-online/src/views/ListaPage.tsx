import { productos } from "@/utils/data"
import ProductCard from "../components/Producto/ProductCard"
import FiltersPanel from "@/components/filter/FiltersPanel"
import { SelectFilter } from "@/components/filter/SelectFilter"

function ListaPage() {
    return (
        <>
            <div className="bg-[url(/list-banner.png)] bg-cover px-8 py-[102px] mt-6 rounded-[48px]">
                <div className="text-[#E7E7E3] flex flex-col gap-y-2 lg:w-[39rem]">
                    <span className="text-2xl">Lorem ipsum dolor</span>
                    <h3 className="font-semibold text-7xl text-white">30% de Descuento</h3>
                    <p className="font-light">Lorem ipsum dolor sit amet consectetur  Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="py-6 flex justify-between items-center">
                <div>
                    <h2 className="text-4xl font-bold capitalize">Encuentra tu par ideal</h2>
                    <p className="text-base text-[#232321]">122 elementos</p>
                </div>
                <SelectFilter />
            </div>
            <div className="grid grid-cols-4 gap-x-4 gap-y-8">
                <div className="col-start-1 row-span-4">
                    <FiltersPanel />
                </div>
                {productos.map(producto => (
                    <ProductCard key={producto.id} producto={producto} />
                ))}
            </div>
        </>
    )
}

export default ListaPage
