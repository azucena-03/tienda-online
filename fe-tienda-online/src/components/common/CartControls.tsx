import { useCart } from "@/context/CartContext";
import { Button } from "../ui/button";
import { Minus, Plus, Trash } from "lucide-react";

type CartControlsProps = {
    productId: number;
    variant: "primary" | "default" | "base"
}

function CartControls({ productId, variant }: CartControlsProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } = useCart()
    const quantity = getItemQuantity(productId);
    return (
        <>
            {quantity === 0 ?
                (<Button variant={variant} className={`${variant === "base" ? "w-10/12" : "w-full"} tracking-wide ${variant === "default" ? "bg-brand text-primary" : ""} `} onClick={() => increaseCartQuantity(productId)}>
                    Agregar al carrito
                </Button>) :
                (
                    <div className="flex justify-between items-center border bg-background shadow-xs rounded-2xl w-full">
                        <Button variant={"ghost"} onClick={() => decreaseCartQuantity(productId)}>
                            {quantity === 1 ? <Trash /> : <Minus />}
                        </Button>
                        <span className="text-sm">{quantity}</span>
                        <Button variant={"ghost"} onClick={() => increaseCartQuantity(productId)}>
                            <Plus />
                        </Button>
                    </div>
                )}
        </>
    )
}

export default CartControls
