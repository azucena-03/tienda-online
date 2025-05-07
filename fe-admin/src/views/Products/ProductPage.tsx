import { fetchProductos } from "@/actions/ProductAction";
import AppBreadcrumb from "@/components/AppBreadcrumb";
import ProductoCard from "@/components/products/ProductoCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/types";
import { CirclePlus } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductPage() {
    const [productos, setProductos] = useState<Card>([]);

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                const data = await fetchProductos();
                setProductos(data ?? []);
            } catch (error) {
                console.error("Error cargando productos:", error);
            }
        };

        cargarProductos();
    }, []);

    return (
        <div>
            <div className="flex justify-between mb-4">
                <div>
                    <h2 className="capitalize text-2xl font-semibold">Lista Productos</h2>
                    <AppBreadcrumb />
                </div>
                <Link to="/products/new">
                    <Button className="uppercase text-sm font-medium tracking-wide bg-[#232321]">
                        <CirclePlus /> Agregar Nuevo Producto
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-3 gap-3.5">
                {productos.map(producto => (
                    <ProductoCard key={producto.productoId} producto={producto} />
                ))}
            </div>
        </div>
    )
}

export default ProductPage
