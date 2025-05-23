import { Check, Heart, Info, Search, ShoppingCart, User } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import MenuNav from "./MenuNav";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

export default function MainNav() {
    const navigate = useNavigate();
    return (
        <>
            <div className="hidden md:block bg-[#272343] py-2.5 text-gray-300 text-[13px]">
                <div className="container flex justify-between mx-auto">
                    <div className="flex gap-x-2 items-center">
                        <Check size={18} />
                        <p>Lorem, ipsum dolor sit amet consectetur</p>
                    </div>
                    <div className="flex gap-x-6 items-center">
                        <p>Lorem.</p>
                        <div className="flex gap-x-1.5 items-center">
                            <Info size={15} />
                            <p>Lorem, ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F0F2F3] py-5 px-6">
                <div className="flex container justify-between mx-auto">
                    <div className="flex items-center h-8">
                        <img src="/logo-icon.png" alt="logo" className="hidden lg:block scale-y-65" />
                        <span className="uppercase font-black text-3xl">shalo</span>
                    </div>
                    <div className="relative w-full max-w-sm hidden md:block">
                        <Input className="pr-10 bg-white border-background" placeholder="Buscar..." />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex gap-x-1.5 md:gap-x-3 text-[10px]">
                        <Button variant={"outline"}>
                            <ShoppingCart />
                            Cart
                            <div className="md:flex justify-center items-center w-5 h-5 bg-[#007580] rounded-full hidden">
                                <p className="text-white font-medium">2</p>
                            </div>
                        </Button>
                        <Button variant={"outline"}>
                            <Heart />
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant={"outline"}>
                                    <User />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-40" align="end">
                                <DropdownMenuLabel>Cuenta</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem onClick={() => navigate("/inicio-sesion")}>
                                        Iniciar Sesion
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => navigate("/nuevo-registro")}>
                                        Registrarse
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>

            <nav>
                <MenuNav />
            </nav>
        </>
    )
}
