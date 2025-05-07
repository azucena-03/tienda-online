import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import { Button } from "../ui/button";

export default function CardDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-4">
                    <Ellipsis />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="bottom">
                <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Detalle</DropdownMenuItem>
                <DropdownMenuItem>Actualización</DropdownMenuItem>
                <DropdownMenuItem>Eliminar</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu >
    )
}
