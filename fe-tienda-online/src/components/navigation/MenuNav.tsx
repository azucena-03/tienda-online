import {
    Menubar, MenubarMenu, MenubarTrigger
} from "@/components/ui/menubar";
import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Separator } from "../ui/separator";

function MenuNav() {
    const navigate = useNavigate();
    return (
        <div className="bg-white hidden md:flex justify-between items-center py-2 p-1 shadow-xs text-primary w-full container mx-auto ">
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger onClick={() => navigate("/productos")}>Mujer</MenubarTrigger>
                </MenubarMenu>
                <Separator orientation="vertical" />
                <MenubarMenu>
                    <MenubarTrigger onClick={() => navigate("/productos")}>Hombre</MenubarTrigger>
                </MenubarMenu>
            </Menubar>

            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger onClick={() => navigate("/inicio-sesion")} className="font-semibold">Iniciar Sesión</MenubarTrigger>
                </MenubarMenu>
                <Separator orientation="vertical" />
                <MenubarMenu>
                    <MenubarTrigger onClick={() => navigate("/nuevo-registro")} className="font-semibold">Registro</MenubarTrigger>
                </MenubarMenu>
                <Separator orientation="vertical" />
                <MenubarMenu>
                    <Button variant={"outline"}>
                        <Moon />
                    </Button>
                </MenubarMenu>
            </Menubar>
        </div>
    )
}

export default MenuNav
