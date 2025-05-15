import { Button } from "../ui/button"

type ProductoCardProps = {
    producto: {
        id: number;
        nombre: string;
        precio: number;
        imagen: string;
        tallas: number[];
    }
}

function ProductCard({ producto }: ProductoCardProps) {
    return (
        <article className="">
            <div className="p-2 rounded-md bg-white mb-4">
                <img src={producto.imagen} alt={producto.nombre} className="rounded-md" />
            </div>
            <div className="flex flex-col gap-y-4">
                <h3 className="text-2xl font-semibold">{producto.nombre}</h3>
                <Button className="w-full uppercase text-sm tracking-wide">
                    ver producto - <span className="text-[#FFA52F]">${producto.precio}</span>
                </Button>
            </div>
        </article>
    )
}

export default ProductCard
