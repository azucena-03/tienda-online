import { Card as CardInfo } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import CardDropdown from "./CardDropdown";
import { ArrowUp } from "lucide-react";
import { Separator } from "../ui/separator";
import { Progress } from "../ui/progress";
import { AspectRatio } from "../ui/aspect-ratio";

type ProductoCardProps = {
    producto: CardInfo[0]
}

function ProductoCard({ producto }: ProductoCardProps) {
    return (
        <Card>
            <div className="flex flex-col gap-4 px-4">
                <CardHeader className="p-0">
                    <div className="flex gap-x-4">
                        <div className="w-[40%]">
                            <AspectRatio ratio={1 / 1}>
                                <img
                                    src={producto.imagen}
                                    alt="producto imagen"
                                    className="rounded object-cover"
                                />
                            </AspectRatio>
                        </div>
                        <div className="space-y-2.5 w-full">
                            <div className="flex items-baseline gap-x-4 justify-between">
                                <div>
                                    <CardTitle className="text-base font-semibold">{producto.nombre}</CardTitle>
                                    <p className="text-sm font-semibold opacity-65">{producto.marca}</p>
                                </div>
                                <CardDropdown />
                            </div>
                            <p className="text-sm font-semibold">S/. {producto.precio.promocion}</p>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="p-0">
                    <h4 className="text-base font-semibold">Descripción</h4>
                    <CardDescription>{producto.descripcion}</CardDescription>
                </CardContent>

                <CardFooter className="p-0">
                    <div className="w-full text-sm font-semibold opacity-80 border p-4 rounded-xl">
                        <div className="flex justify-between items-center ">
                            <p>Ventas</p>
                            <div className="flex gap-x-2">
                                <ArrowUp size={18} className="text-[#FFA52F]" />
                                12
                            </div>
                        </div>
                        <Separator className="my-1" />
                        <div className="flex justify-between">
                            <p>Stock</p>
                            <div className="flex gap-x-2 items-center">
                                <Progress value={producto.stock} className="w-[52px] h-1" color="yellow" />
                                <p>{producto.stock}</p>
                            </div>
                        </div>
                    </div>
                </CardFooter>
            </div>
        </Card>

    )
}
export default ProductoCard;
