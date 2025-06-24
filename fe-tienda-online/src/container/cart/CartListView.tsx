import CartCard from "@/components/cards/CartCard";
import CartRow from "@/components/cards/CartRow";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";

function CartListView() {
    const { cartItems } = useCart();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 920);
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 920);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const CartTable = () => (
        <Table>
            <TableHeader>
                <TableRow className="bg-neutral-700 hover:bg-neutral-700">
                    <TableHead className="w-fit">Producto</TableHead>
                    <TableHead className="text-center">Cantidad</TableHead>
                    <TableHead className="text-center">Subtotal</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {cartItems.map(cart => (
                    <CartRow key={cart.id} cart={cart} />
                ))}
            </TableBody>
        </Table>
    );

    const Cart = () => (
        <div className="flex flex-col gap-y-6">
            {cartItems.map(cart => (
                <CartCard key={cart.id} cart={cart} />
            ))}
        </div>
    );


    return isMobile ? Cart() : CartTable()
}

export default CartListView
