import { Link } from "react-router-dom"
import CartControls from "../common/CartControls"
import { Button } from "../ui/button"
import { formatCurrency } from "@/utils/utils"
import { useFavorite } from "@/context/FavoriteContext"
import { HeartFilledIcon, HeartOutlineIcon } from "@/assets"
import { Product } from "@/types"

type FeaturedProductCardProps = {
    producto: Product
}

function FeaturedProductCard({ producto }: FeaturedProductCardProps) {
    const { handleClickFavorite, favoriteExists } = useFavorite()
    return (
        <article key={producto.id} className="border-2 border-brand-accent rounded-xs h-full relative flex flex-col justify-between bg-card group">
            <Link to={`/productos/${producto.id}`}>
                <div className="relative h-64 overflow-hidden img-radial">
                    <img src={producto.thumbnail} alt={producto.nombre} className="w-full h-64 object-cover object-center rounded-t-xs img-radial img-transition" />
                </div>
                <div className="flex flex-col gap-y-3 p-4 rounded-b-xl text-sm">
                    <span className="text-xs font-medium text-caption -tracking-[0.32px] uppercase">{producto.marca}</span>
                    <h3 className="uppercase font-medium leading-[18.2px] tracking-tight line-clamp-2 h-11 overflow-hidden">{producto.nombre}</h3>
                    <span className="text-xl font-bold text-shadow-xs text-caption">{formatCurrency(producto.precio)}</span>
                    <p className="text-xs text-caption">{producto.descripcion}</p>
                </div>
            </Link>
            <div className="p-4 pt-0">
                <CartControls key={producto.id} productId={producto.id} variant="default" />
            </div>
            <Button variant={"favorite"} className="absolute top-2 right-2" onClick={() => handleClickFavorite(producto)}>
                {favoriteExists(producto.id) ? <HeartFilledIcon /> : <HeartOutlineIcon />}
            </Button>
        </article>
    )
}

export default FeaturedProductCard
