import { Heart, Search, ShoppingCart } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import MenuNav from "./MenuNav";

export default function MainNav() {
    return (
        <>
            <nav className="border-b">
                <MenuNav />
            </nav>

            <div className="bg-white py-5 px-4 shadow-sm">
                <div className="flex container justify-between mx-auto">
                    <span className="uppercase font-black text-3xl italic">shalo<span className="text-[#FFA52F] lowercase">.com</span></span>
                    <div className="relative w-full max-w-sm hidden md:block">
                        <Input className="pr-10 border-input" placeholder="Buscar..." />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex gap-x-1.5 md:gap-x-3 text-xs">
                        <Button variant={"outline"}>
                            <ShoppingCart />
                            <div className="md:flex justify-center items-center w-5 h-5 bg-[#007580] rounded-full hidden">
                                <p className="text-white font-medium">0</p>
                            </div>
                        </Button>
                        <Button variant={"outline"}>
                            <Heart />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
