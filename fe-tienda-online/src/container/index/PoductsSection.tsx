import ProductCard from "@/components/cards/ProductCard"
import ProductsSliderHome from "@/components/swipers/ProductsSliderHome"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { productos } from "@/utils/data"

function PoductsSection() {
    return (
        <section className="mb-20">
            <Tabs defaultValue="todos" className="items-center">
                <div className="sm:flex justify-between justify-items-center items-center w-full p-subtitle">
                    <h2 className="text-center text-subtitle">✨ productos para ti ✨</h2>
                    <TabsList className="flex-wrap gap-2">
                        <TabsTrigger value="todos" className="tab">Todos</TabsTrigger>
                        <TabsTrigger value="nuevos" className="tab">Nuevos</TabsTrigger>
                        <TabsTrigger value="tendencias" className="tab">Tendencia</TabsTrigger>
                        <TabsTrigger value="mas-vendidos" className="tab">Más Vendidos</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="todos">
                    <div className="tab-display">
                        {productos.slice(0, 8).map(producto => (
                            <ProductCard key={producto.id} producto={producto} />
                        ))}
                    </div>
                    <ProductsSliderHome />
                </TabsContent>
                <TabsContent value="nuevos">
                    <div className="tab-display">
                        {productos.slice(0, 3).map(producto => (
                            <ProductCard key={producto.id} producto={producto} />
                        ))}
                    </div>
                    <ProductsSliderHome />
                </TabsContent>
                <TabsContent value="tendencias">
                    <div className="tab-display">
                        {productos.slice(0, 8).map(producto => (
                            <ProductCard key={producto.id} producto={producto} />
                        ))}
                    </div>
                    <ProductsSliderHome />
                </TabsContent>
                <TabsContent value="mas-vendidos">
                    <div className="tab-display">
                        {productos.slice(0, 2).map(producto => (
                            <ProductCard key={producto.id} producto={producto} />
                        ))}
                    </div>
                    <ProductsSliderHome />
                </TabsContent>
            </Tabs>
        </section>
    )
}

export default PoductsSection
