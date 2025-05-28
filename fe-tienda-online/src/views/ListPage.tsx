import { productos } from "@/utils/data"
import ProductCard from "../components/cards/ProductCard"
import FiltersPanel from "@/components/common/FiltersPanel"
import AppBreadcrumb from "@/components/common/AppBreadcrumb"
import { Button } from "@/components/ui/button"
import { FilterIcon, X } from "lucide-react"
import { useState } from "react"

function ListPage() {
    const [open, setOpen] = useState(false);
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
                        <FiltersPanel />
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
                            <FiltersPanel />
                        </div>
                    </div>
                )}

                {productos.map(producto => (
                    <ProductCard key={producto.id} producto={producto} />
                ))}
            </div>
        </section>
    )
}

export default ListPage
