import { Heart, Search, ShoppingCart } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import MenuNav from "./MenuNav";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import MobileNav from "./MobileNav";
import SearchProduct from "./SearchProduct";

export default function MainNav() {
    const { cartQuantity } = useCart()
    return (
        <header>
            <nav className="border-b bg-background">
                <MenuNav />
            </nav>

            <div className="bg-background shadow-sm">
                <div className="flex container max-w-[76rem] justify-between items-center mx-auto py-4 px-4">
                    <span className="uppercase font-black text-2xl md:text-3xl italic">shalo<span className="text-brand-accent lowercase">.com</span></span>
                    <div className="relative w-full max-w-sm hidden md:block">
                        <SearchProduct />
                    </div>
                    <div className="flex gap-x-1.5 md:gap-x-3 text-xs">
                        <Link to={"/carrito"}>
                            <Button variant={"outline"}>
                                <ShoppingCart />
                                <div className="md:flex justify-center items-center w-5 h-5 bg-brand rounded-full hidden">
                                    <p className="text-primary font-medium">{cartQuantity}</p>
                                </div>
                            </Button>
                        </Link>
                        <Button variant={"outline"} >
                            <Link to="/favoritos">
                                <Heart />
                            </Link>
                        </Button>
                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    )
}
