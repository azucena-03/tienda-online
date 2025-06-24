import { CartItem, useCart } from "@/context/CartContext"
import { productos } from "@/utils/data"
import { formatCurrency } from "@/utils/utils"
import { Button } from "../ui/button"
import { Heart, Minus, Plus, Trash, X } from "lucide-react"
import { TableCell, TableRow } from "../ui/table"
import { Link } from "react-router-dom"
import CartControls from "../common/CartControls"
import FavoriteControls from "../common/FavoriteControls"

type CartRowProps = {
    cart: CartItem
}
function CartRow({ cart }: CartRowProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useCart()
    const product = productos.find(product => product.id === cart.id)
    const quantity = getItemQuantity(product!.id);
    if (product == null) return null

    return (
        <TableRow>
            <Link to={`/productos/${product.id}`}>
                <TableCell className="font-medium flex gap-x-6">
                    <img src={product.thumbnail} alt={product.nombre} className="w-20 shadow-xs h-20 rounded-md img-radial" />
                    <div className="space-y-2">
                        <div>
                            <span className="text-caption uppercase text-xs font-light">{product.marca}</span>
                            <h2 className="text-base">{product.nombre}</h2>
                        </div>
                        <span className="text-sm text-caption font-light">{formatCurrency(product.precio)}</span>
                    </div>
                </TableCell>
            </Link>
            <TableCell>
                <CartControls productId={product.id} variant="primary" />
            </TableCell>
            <TableCell className="text-center">{formatCurrency(product.precio * quantity)}</TableCell>
            <TableCell className="text-end">
                <div className=" flex flex-col items-center justify-center">
                    <Button variant={"danger"} onClick={() => removeFromCart(product.id)}>
                        <X strokeWidth={4} />
                    </Button>
                    <FavoriteControls product={product} variant="danger" />
                </div>
            </TableCell>
        </TableRow>
    )
}
export default CartRow;
