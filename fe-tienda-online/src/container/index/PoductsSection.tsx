import ProductCard from "@/components/Producto/ProductCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { productos } from "@/utils/data"

function PoductsSection() {
    return (
        <section className="mb-20">
            <h2 className="text-center text-7xl font-bold leading-[110%] uppercase mb-4">Nuestros productos</h2>
            <Tabs defaultValue="todos" className="w-full items-center">
                <TabsList className="mb-8 bg-[#F0F2F3]">
                    <TabsTrigger value="todos">Todos</TabsTrigger>
                    <TabsTrigger value="nuevos">Nuevos</TabsTrigger>
                    <TabsTrigger value="tendencias">Tendencia</TabsTrigger>
                    <TabsTrigger value="mas-vendidos">Más Vendidos</TabsTrigger>
                </TabsList>
                <TabsContent value="todos">
                    <div className="grid grid-cols-4 gap-6">
                        {productos.map(producto => (
                            <ProductCard key={producto.id} producto={producto} />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="nuevos">
                    <div className="grid grid-cols-4 gap-6">
                        {productos.slice(0, 3).map(producto => (
                            <ProductCard key={producto.id} producto={producto} />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="tendencias">
                    <div className="grid grid-cols-4 gap-6">
                        {productos.map(producto => (
                            <ProductCard key={producto.id} producto={producto} />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="mas-vendidos">
                    <div className="grid grid-cols-4 gap-6">
                        {productos.slice(0, 2).map(producto => (
                            <ProductCard key={producto.id} producto={producto} />
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    )
}

export default PoductsSection
