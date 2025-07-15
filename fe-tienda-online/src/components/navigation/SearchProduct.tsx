import { useEffect, useRef, useState } from "react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { productos } from "@/utils/data";
import { Product } from "@/types";
import { Link } from "react-router-dom";

type SearchProductCardProps = {
    name: string;
    image: string;
    brand: string;
}

const SearchProductCard = ({ name, image, brand }: SearchProductCardProps) => (
    <article className="flex gap-x-4">
        <img src={image} alt={name} className="w-1/5 img-radial rotate-xs" />
        <div className="flex flex-col space-y-2">
            <span className="text-xs font-medium text-caption -tracking-[0.32px] uppercase">{brand}</span>
            <h3 className="uppercase font-medium leading-[18.2px] tracking-tight line-clamp-2 h-11 overflow-hidden">{name}</h3>
        </div>
    </article>
)

function SearchProduct() {
    const selectRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState("");

    const productosFiltrados = query
        ? productos.filter((p) =>
            p.nombre.toLowerCase().includes(query.toLowerCase())
        )
        : [];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setQuery("")
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Command className="bg-neutral-700 rounded-xs">

            <CommandInput
                placeholder="Buscar producto..."
                value={query}
                onValueChange={(value) => setQuery(value)}
                autoComplete="off"
                ref={selectRef}
            />

            {query && (
                <CommandList className="absolute top-10 z-50 bg-neutral-700 w-full">
                    {productosFiltrados.length > 0 ? (
                        <CommandGroup heading="Productos encontrados">
                            {productosFiltrados.map((product: Product) => (
                                <CommandItem key={product.id} value={product.nombre}>
                                    <Link to={`/productos/${product.id}`}>
                                        <SearchProductCard name={product.nombre} image={product.thumbnail} brand={product.marca} />
                                    </Link>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    ) : (
                        <CommandEmpty>No se encontró producto</CommandEmpty>
                    )}
                </CommandList>
            )}
        </Command>
    );
}

export default SearchProduct
