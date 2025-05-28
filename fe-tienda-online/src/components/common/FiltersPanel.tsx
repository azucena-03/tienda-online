import { categorias } from "@/utils/data";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Input } from "../ui/input";
import { Slider } from "../ui/slider";

const tallas = Array.from({ length: 10 }, (_, i) => 35 + i);
const marcas = ["Adidas", "Nike", "Puma"]

function FiltersPanel() {
    return (
        <div className="flex flex-col gap-y-4 lg:gap-y-6">
            <h2 className="text-xl font-bold">Filtros</h2>

            <Input placeholder="Buscar Producto" />

            <div>
                <h3 className="font-bold text-sm uppercase mb-4">Marca</h3>
                <div className="space-x-3">
                    {marcas.map((marca, index) => (
                        <Button key={index} variant={"base"} className="text-xs">{marca}</Button>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-bold text-sm uppercase mb-4">Categoria</h3>
                <div>
                    <RadioGroup defaultValue="comfortable">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Todas" />
                            <Label>Todas</Label>
                        </div>
                        {categorias.map((categoria) => (
                            <div key={categoria.id} className="flex items-center space-x-2">
                                <RadioGroupItem value={categoria.nombre} />
                                <Label>{categoria.nombre}</Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>
            </div>

            <div>
                <h3 className="font-bold text-sm uppercase mb-4">Talla</h3>
                <div className="flex flex-wrap gap-3">
                    {tallas.map((talla, index) => (
                        <Button key={index} variant={"outline"}>{talla}</Button>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-bold text-sm uppercase mb-4">Precio</h3>
                <Slider defaultValue={[50]} max={500} step={1} className="w-full direction-rtl" />
                <div className="flex justify-between items-center text-[#232321] text-sm">
                    <span>S/. 0</span>
                    <span>S/. 500</span>
                </div>
            </div>

            <div className="flex justify-between md:hidden">
                <Button variant={"outline"} className="w-[48%] uppercase border-primary">
                    Limpiar
                </Button>

                <Button className="w-[48%] uppercase">
                    Aplicar
                </Button>
            </div>
        </div>
    )
}

export default FiltersPanel
