import AppBreadcrumb from "@/components/common/AppBreadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import CartListView from "@/container/cart/CartListView"
import { useCart } from "@/context/CartContext"
import { productos } from "@/utils/data"
import { formatCurrency } from "@/utils/utils"
import { Link } from "react-router-dom"

function CartPage() {
    const { cartItems } = useCart()
    const order = cartItems.map(p => {
        const item = productos.find(product => product.id === p.id)
        return `${item?.nombre} — cantidad: ${p.quantity} ${p.quantity > 1 ? "pares" : "par"} `
    }).join(", ");
    console.log(order)
    const message = `Hola, estoy interesado en estos productos: ${order}. ¿Podrían darme más información, por favor?`;
    const url = `https://wa.me/976629695?text=${encodeURIComponent(message)}`;

    return (
        <section>
            <AppBreadcrumb />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6">
                <div className="md:col-span-2 space-x-4">
                    {cartItems.length > 0 ?
                        <CartListView /> :
                        <div className="flex flex-col justify-center items-center gap-y-4">
                            <img src="/empty-cart.svg" alt="empty cart" />
                            <p className="uppercase text-danger font-semibold">Tu carrito esta vacio</p>
                            <Button asChild>
                                <Link to="/productos">Retornar a productos</Link>
                            </Button>
                        </div>
                    }
                </div>
                <Card className="h-fit w-full">
                    <CardHeader>
                        <CardTitle className="text-center">Resumen de compra</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-between text-sm">
                        <p>Total</p>
                        <span>{formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = productos.find(product => product.id === cartItem.id)
                            return total + (item?.precio || 0) * cartItem.quantity
                        }, 0))}</span>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">
                            <Link to={url} target="_blank" rel="noopener noreferrer">Ir a comprar</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}

export default CartPage
