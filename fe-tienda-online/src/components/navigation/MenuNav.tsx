import {
    Menubar, MenubarMenu, MenubarTrigger
} from "@/components/ui/menubar";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Separator } from "../ui/separator";
import { useTheme } from "@/context/themeProvider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

function MenuNav() {
    const { setTheme } = useTheme()
    const navigate = useNavigate();

    return (
        <div className="bg-background hidden md:flex justify-between items-center px-4 shadow-xs text-primary w-full container max-w-[76rem] mx-auto">
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger className="text-xs cursor-pointer" onClick={() => navigate("/productos")}>Mujer</MenubarTrigger>
                </MenubarMenu>
                <Separator orientation="vertical" />
                <MenubarMenu>
                    <MenubarTrigger className="text-xs cursor-pointer" onClick={() => navigate("/productos")}>Hombre</MenubarTrigger>
                </MenubarMenu>
                <Separator orientation="vertical" />
                <MenubarMenu>
                    <MenubarTrigger className="text-xs cursor-pointer" onClick={() => navigate("/productos")}>Unisex</MenubarTrigger>
                </MenubarMenu>
            </Menubar>

            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger className="text-xs font-semibold cursor-pointer" onClick={() => navigate("/inicio-sesion")}>Iniciar Sesión</MenubarTrigger>
                </MenubarMenu>
                <Separator orientation="vertical" />
                <MenubarMenu>
                    <MenubarTrigger className="text-xs font-semibold cursor-pointer" onClick={() => navigate("/nuevo-registro")}>Registro</MenubarTrigger>
                </MenubarMenu>
                <Separator orientation="vertical" />
                <MenubarMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-xs">
                                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </MenubarMenu>
            </Menubar>
        </div>
    )
}

export default MenuNav
