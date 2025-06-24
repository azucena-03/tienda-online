import { categorias, productos } from "@/utils/data";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Input } from "../ui/input";
import { Slider } from "../ui/slider";
import { useFilter } from "@/context/FilterContext";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Separator } from "../ui/separator";

const tallas = Array.from({ length: 10 }, (_, i) => 35 + i);

function FiltersPanel({ resetFilter }: { resetFilter: () => void }) {
    const { searchQuery,
        setSearchQuery,
        setBrand,
        selectedCategory,
        setSelectedCategory,
        setSize,
        price,
        setPrice } = useFilter();
    const [brands] = useState(Array.from(new Set(productos.map(product => product.marca))))

    const handleBrandClick = (brand: string) => {
        setBrand(brand)
    }

    const handleRadioChangeCategories = (value: string) => {
        setSelectedCategory(value)
    }

    const handleSizeClick = (size: number) => {
        setSize(size)
    }

    return (
        <div className="flex flex-col gap-y-4 lg:gap-y-6">
            <h2 className="text-xl font-bold">Filtros</h2>

            <div>
                <Input placeholder="Buscar Producto" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="bg-background border-input" />
                <Accordion type="multiple" className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-bold uppercase">Marca</AccordionTrigger>
                        <AccordionContent>
                            <div className="space-x-3 space-y-3">
                                {brands.map((brand, index) => (
                                    <Button key={index} variant={"base"} className="text-xs" onClick={() => handleBrandClick(brand)} >{brand}</Button>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-bold uppercase">Categoria</AccordionTrigger>
                        <AccordionContent>
                            <RadioGroup value={selectedCategory} onValueChange={handleRadioChangeCategories}>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Todas" />
                                    <Label>Todas</Label>
                                </div>
                                {categorias.map((category) => (
                                    <div key={category.id} className="flex items-center space-x-2">
                                        <RadioGroupItem value={category.nombre} />
                                        <Label>{category.nombre}</Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-bold uppercase">Talla</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-wrap gap-3">
                                {tallas.map((size, index) => (
                                    <Button key={index} variant={"outline"} onClick={() => handleSizeClick(size)}>{size}</Button>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Separator />
                <div className="pt-4">
                    <h3 className="font-bold text-sm uppercase mb-4">Precio</h3>
                    <Slider defaultValue={[0, 50]} value={price} max={500} step={1} onValueChange={setPrice} className="w-full mb-2" />
                    <div className="flex justify-between items-center text-[#232321] text-sm">
                        <span>S/. {price ? `${price[0]} - ${price[1]}` : "0"}</span>
                        <span>S/. 500</span>
                    </div>
                </div>
            </div>

            <Button variant={"outline"} className="w-full uppercase border-primary" onClick={resetFilter}>
                Limpiar
            </Button>

        </div>
    )
}

export default FiltersPanel
