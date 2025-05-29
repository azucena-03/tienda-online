import { Heart } from "lucide-react";
import { Button } from "../ui/button"

type ProductoCardProps = {
    producto: {
        id: number;
        nombre: string;
        precio: number;
        marca: string;
        thumbnail: string;
        tallas: number[];
    }
}

function ProductCard({ producto }: ProductoCardProps) {
    console.log(producto.thumbnail)
    return (
        <article className="shadow-md rounded-xl relative">
            <img src={producto.thumbnail} alt={producto.nombre} className="w-full h-56 object-cover object-center rounded-t-xl bg-radial from-gray-100 via-gray-200 via-50% to-gray-300 to-85%" />
            <div className="flex flex-col gap-y-4 bg-white p-4 lg:p-6 rounded-b-xl text-sm">
                <span className="text-xs font-semibold text-caption uppercase">{producto.marca}</span>
                <h3 className="capitalize font-bold line-clamp-2 h-11 overflow-hidden">{producto.nombre}</h3>
                <span className="text-caption font-semibold">S/. {producto.precio}</span>
                <Button className="w-full text-sm tracking-wide">
                    Agregar al carrito
                </Button>
            </div>
            <Button variant={"outline"} className="absolute top-2 right-2">
                <Heart />
            </Button>
        </article>
    )
}

export default ProductCard
