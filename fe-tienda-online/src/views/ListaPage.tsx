import { productos } from "@/utils/data"
import ProductCard from "../components/Producto/ProductCard"

function ListaPage() {
    return (
        <>
            <div className="bg-[url(/lista-banner.png)] bg-cover px-8 py-[102px] mt-6">
                <div className="text-white flex flex-col gap-y-2">
                    <span className="text-2xl">Lorem ipsum dolor</span>
                    <h3 className="font-semibold text-7xl">lorem 30% sit</h3>
                    <p className="text-xl text-[#E7E7E3] font-light">Lorem ipsum dolor sit amet consectetur <br /> Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="py-6">
                <h2 className="text-4xl font-bold">Lorem ipsum dolor</h2>
                <p className="text-base text-[#232321] font-semibold">122 elementos</p>
            </div>
            <div className="grid grid-cols-4 gap-x-4 gap-y-8">
                <div className="col-start-1 row-span-4">
                    <h3>Filters</h3>
                </div>
                {productos.map(producto => (
                    <ProductCard key={producto.id} producto={producto} />
                ))}
            </div>
        </>
    )
}

export default ListaPage
