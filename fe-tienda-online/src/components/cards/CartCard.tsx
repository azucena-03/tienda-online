import { CartItem, useCart } from "@/context/CartContext"
import { productos } from "@/utils/data"
import { formatCurrency } from "@/utils/utils"
import { Button } from "../ui/button"
import { Minus, Plus, Trash, X } from "lucide-react"
import { Link } from "react-router-dom"
import FavoriteControls from "../common/FavoriteControls"

type cartProps = {
    cart: CartItem
}
function CartCard({ cart }: cartProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useCart()
    const product = productos.find(product => product.id === cart.id)
    const quantity = getItemQuantity(product!.id);
    if (product == null) return null

    return (
        <div className="bg-card p-6 rounded-xs shadow-sm space-y-2">
            <Link to={`/productos/${product.id}`} className="flex gap-x-6">
                <img src={product.thumbnail} alt={product.nombre} className="w-20 border rounded-xl img-radial" />
                <div className="space-y-2">
                    <div>
                        <span className="text-caption uppercase text-xs font-light">{product.marca}</span>
                        <h2 className="text-base">{product.nombre}</h2>
                    </div>
                    <span className="text-sm text-caption font-light">{formatCurrency(product.precio)}</span>
                </div>
            </Link>
            <div className="flex justify-between items-center">
                <div className="flex items-center justify-start w-2/6">
                    <Button variant={"danger"} onClick={() => removeFromCart(product.id)}>
                        <X strokeWidth={4} />
                    </Button>
                    <FavoriteControls product={product} variant="danger" />
                </div>
                {quantity === 0 ?
                    (<Button className="w-full text-sm tracking-wide" onClick={() => increaseCartQuantity(product.id)}>
                        Agregar al carrito
                    </Button>) :
                    (
                        <div className="flex justify-between items-center border bg-background shadow-xs rounded-md w-1/2 md:w-7/12 lg:w-full">
                            <Button variant={"ghost"} onClick={() => decreaseCartQuantity(product.id)}>
                                {quantity === 1 ? <Trash /> : <Minus />}
                            </Button>
                            <span className="text-sm">{quantity}</span>
                            <Button variant={"ghost"} onClick={() => increaseCartQuantity(product.id)}>
                                <Plus />
                            </Button>
                        </div>
                    )}

            </div>
        </div>
    )
}

export default CartCard
