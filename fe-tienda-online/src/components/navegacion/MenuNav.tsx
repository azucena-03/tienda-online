import {
    Menubar, MenubarContent,
    MenubarItem,
    MenubarMenu, MenubarTrigger
} from "@/components/ui/menubar"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";

const categorias = [
    {
        value: "urbano",
        label: "Urbano",
    },
    {
        value: "clasicas",
        label: "Clasicas",
    }
]


function MenuNav() {
    const navigate = useNavigate();
    return (
        <div className="bg-white hidden md:flex justify-between items-center px-4 py-2 border p-1 shadow-xs text-[#272343]">
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>
                        <Button
                            variant="outline"
                            className="px-6 justify-center gap-x-4"
                        >
                            <Menu className="opacity-50" />
                            Categorias
                        </Button>
                    </MenubarTrigger>
                    <MenubarContent>
                        {categorias.map((categoria) => (
                            <MenubarItem
                                key={categoria.value}
                            >
                                {categoria.label}
                            </MenubarItem>
                        ))}
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger onClick={() => navigate("/")}>Inicio</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger onClick={() => navigate("/productos")}>Productos</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger onClick={() => navigate("/sobre-nosotros")}>Sobre Nosotros</MenubarTrigger>
                </MenubarMenu>
            </Menubar>

            <p className="text-[#636270] text-sm">Contacto: <span className="font-medium">(233) 4343</span></p>
        </div>
    )
}

export default MenuNav
