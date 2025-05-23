import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"

export function SelectFilter() {
    return (
        <Select>
            <SelectTrigger className="w-[12rem] bg-white uppercase font-semibold">
                <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Filtros</SelectLabel>
                    <SelectItem value="todo">Todos</SelectItem>
                    <SelectItem value="nuevo">Nuevos</SelectItem>
                    <SelectItem value="popular">Populares</SelectItem>
                    <SelectItem value="oferta">En Oferta</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}