import { Link } from "react-router-dom";
import { formatCurrency } from "@/utils/utils";
import CartControls from "../common/CartControls";
import { Product } from "@/types";
import FavoriteControls from "../common/FavoriteControls";

type ProductoCardProps = {
    producto: Product
}

function ProductCard({ producto }: ProductoCardProps) {
    return (
        <article className="rounded-xs relative bg-card group">
            <Link to={`/productos/${producto.id}`}>
                <div className="relative h-56 overflow-hidden img-radial rounded-t-xs">
                    <img src={producto.thumbnail} alt={producto.nombre} className="w-full h-full object-cover object-center img-transition" />
                </div>
                <div className="flex flex-col gap-y-3 p-3 rounded-b-xl text-sm">
                    <span className="text-xs font-medium text-caption -tracking-[0.32px] uppercase">{producto.marca}</span>
                    <h3 className="uppercase font-medium leading-[18.2px] tracking-tight line-clamp-2 h-11 overflow-hidden">{producto.nombre}</h3>
                    <span className="font-bold text-caption">{formatCurrency(producto.precio)}</span>
                </div>
            </Link>
            <div className="p-3 pt-0">
                <CartControls productId={producto.id} variant="primary" />
            </div>
            <FavoriteControls product={producto} variant="favorite" absolutePosition="top-2 right-2" />
        </article>
    )
}

export default ProductCard
