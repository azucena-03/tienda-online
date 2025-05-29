import { productos } from "@/utils/data"
import ProductCard from "../components/cards/ProductCard"
import FiltersPanel from "@/components/common/FiltersPanel"
import AppBreadcrumb from "@/components/common/AppBreadcrumb"
import { Button } from "@/components/ui/button"
import { FilterIcon, RefreshCcw, X } from "lucide-react"
import { useState } from "react"
import { useFilter } from "@/utils/FilterContext"

function ListPage() {
    const { searchQuery, setSearchQuery, brand, setBrand, selectedCategory, setSelectedCategory, size, setSize, price, setPrice } = useFilter();
    const [products] = useState(productos)
    const [open, setOpen] = useState(false);

    const getFilteredProducts = () => {
        let filteredProducts = products;

        if (searchQuery) {
            filteredProducts = filteredProducts.filter(product =>
                product.nombre.toLowerCase().includes(searchQuery.toLowerCase())
            )
        }

        if (brand) {
            filteredProducts = filteredProducts.filter(product =>
                product.marca.toLowerCase().includes(brand.toLowerCase())
            )
        }

        if (selectedCategory) {
            filteredProducts = filteredProducts.filter(product => {
                if (selectedCategory === "Todas") {
                    return true
                }

                return product.categoria.toLowerCase() === selectedCategory.toLowerCase()
            })
        }

        if (size) {
            filteredProducts = filteredProducts.filter(product =>
                product.tallas.includes(size)
            )
        }

        if (price) {
            filteredProducts = filteredProducts.filter(product =>
                product.precio >= price[0] && product.precio <= price[1]
            )
        }

        return filteredProducts;

    }

    const filteredProducts = getFilteredProducts()

    const handleResetFilters = () => {
        setSearchQuery("");
        setBrand("");
        setSelectedCategory("");
        setSize(undefined);
        setPrice(undefined)
    };

    return (
        <section>
            <AppBreadcrumb />

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 md:gap-y-9">
                <div className="sm:col-span-2 md:col-span-1 md:col-start-1 md:row-span-4">
                    <Button variant={"outline"} className="w-full md:hidden flex justify-between border-black" onClick={() => setOpen(true)}>
                        <span>Filtros</span>
                        <FilterIcon />
                    </Button>
                    <div className="hidden md:block">
                        <FiltersPanel resetFilter={handleResetFilters} />
                    </div>
                </div>
                {open && (
                    <div className="fixed inset-0 z-40 flex md:hidden">
                        <div className="bg-white w-full h-full p-4 overflow-auto relative">
                            <button
                                className="mb-4 text-primary absolute right-3"
                                onClick={() => setOpen(false)}
                            >
                                <X />
                            </button>
                            <FiltersPanel resetFilter={handleResetFilters} />
                        </div>
                    </div>
                )}

                {filteredProducts.length > 0 ?
                    filteredProducts.map(producto => (
                        <ProductCard key={producto.id} producto={producto} />
                    ))
                    :
                    <div className="flex flex-col gap-y-4 text-center items-center justify-center sm:col-span-2 lg:col-span-3 md:row-span-2">
                        <img src="/search-filter.svg" alt="" width={70} />
                        <h2 className="font-semibold">No encontramos productos que coincidan con tu selección.</h2>
                        <p className="text-xs text-caption">Ajusta los filtros para descubrir más productos.</p>
                        <Button className="flex justify-between" onClick={handleResetFilters}>
                            <span className="capitalize">Reiniciar filtros</span>
                            <RefreshCcw />
                        </Button>
                    </div>
                }
            </div>
        </section>
    )
}

export default ListPage
