import { formatCurrency } from "@/utils/utils"
import { Link } from "react-router-dom"
import CartControls from "../common/CartControls"
import { Product } from "@/types"
import FavoriteControls from "../common/FavoriteControls"

type ProductoCardCompactProps = {
    producto: Product
}

function ProductCardCompact({ producto }: ProductoCardCompactProps) {
    return (
        <article className="bg-card p-4 rounded-xs shadow-sm relative group">
            <Link to={`/productos/${producto.id}`} className="flex gap-x-4 md:gap-x-6">
                <div className="relative h-30 overflow-hidden img-radial">
                    <img src={producto.thumbnail} alt={producto.nombre} className="w-30 object-cover object-center rounded-xs img-radial img-transition" />
                </div>
                <div className="space-y-2">
                    <div>
                        <span className="text-xs font-medium text-caption -tracking-[0.32px] uppercase">{producto.marca}</span>
                        <h3 className="text-sm uppercase font-medium leading-[18.2px] tracking-tight truncate h-5 overflow-hidden w-32 group-hover:underline">{producto.nombre}</h3>
                    </div>
                    <span className="text-sm font-bold text-caption">{formatCurrency(producto.precio)}</span>
                </div>
            </Link>
            <div className="absolute bottom-4 right-4 left-[9.5rem] md:left-[9.9rem]">
                <CartControls key={producto.id} productId={producto.id} variant="primary" />
            </div>
            <FavoriteControls product={producto} variant="favorite" absolutePosition="top-4 left-[6.2rem]" />
        </article>
    )
}

export default ProductCardCompact
