import { Button } from "@/components/ui/button";
import { productos } from "@/utils/data";
import SizeChartDialog from "./SizeChartDialog";
import ProductSwiper from "@/components/swipers/ProductSwiper";
import { formatCurrency } from "@/utils/utils";
import CartControls from "@/components/common/CartControls";
import { Separator } from "@/components/ui/separator";
import { useFavorite } from "@/context/FavoriteContext";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import FavoriteControls from "@/components/common/FavoriteControls";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

type ProductDetailsProps = {
    productId: string | undefined
}

function ProductDetails({ productId }: ProductDetailsProps) {
    const { favoriteExists } = useFavorite()
    const { increaseCartQuantity } = useCart()
    const navigate = useNavigate()
    const product = productos.find(p => p.id === Number(productId));

    const handleAddToCartAndRedirect = () => {
        increaseCartQuantity(product!.id)
        navigate("/carrito")
    }

    return (
        <div className="mb-6">
            <div className="hidden md:grid grid-cols-4 gap-4 overflow-hidden h-fit">
                <img src={product?.thumbnail} alt={product?.nombre} className="img-radial md:h-full object-cover" />
                {product?.images.map(img => (
                    <img src={img} alt={product?.nombre} className="img-radial md:h-full md:w-full object-cover" />
                ))}
            </div>
            <ProductSwiper thumbail={product?.thumbnail} imagenes={product?.images} />
            <Separator className="my-4 hidden md:block" />
            <div className="grid md:grid-cols-2 mb-4 gap-x-28 gap-y-4">
                <div>
                    <h1 className="font-secondary font-medium uppercase text-3xl text-primary">{product?.nombre}</h1>
                    <span className="text-xs text-neutral-400 capitalize rounded-xs px-3 py-1 w-fit bg-neutral-700">{product?.marca}</span>

                    <p className="font-secondary text-lg font-semibold mt-6">{formatCurrency(product!.precio)}</p>
                </div>
                <div className="justify-self-start w-full space-y-4">
                    <div className="flex items-center gap-x-6">
                        <h2 className="font-secondary text-sm w-14">Colores</h2>

                        <div className="flex flex-wrap gap-2">
                            {product?.colors.map(color => (
                                <span className={`w-5 h-5 border ${color}`}></span>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-x-6">
                        <h2 className="font-secondary text-sm w-14">Tallas</h2>

                        <div className="flex flex-wrap gap-2">
                            {product?.tallas.map(talla => (
                                <Button variant={"outline"} className="h-fit w-fit px-1.5 py-0.5 text-xs rounded-none">{talla}</Button>
                            ))}
                        </div>

                        <SizeChartDialog />
                    </div>

                    <Button className="w-full" onClick={handleAddToCartAndRedirect}>Comprar ahora</Button>

                    <div className="flex justify-between items-center gap-x-2">
                        <CartControls productId={product!.id} variant="base" />
                        <HoverCard>
                            <HoverCardTrigger className="w-2/12">
                                <FavoriteControls product={product!} variant="primary" />
                            </HoverCardTrigger>
                            <HoverCardContent className="w-fit p-2 text-xs">
                                <span>{favoriteExists(product!.id) ? "Quitar de" : "Agregar a"} favoritos</span>
                            </HoverCardContent>
                        </HoverCard>
                    </div>

                </div>
            </div>
            <div className="text-xs text-caption font-light space-y-2">
                <h2 className="text-primary text-base capitalize">acerca del producto</h2>

                <p className="text-justify">{product?.descripcion}</p>
                <table>
                    <tbody>
                        <tr>
                            <td>Medidas del paquete</td>
                            <td className="px-2">:</td>
                            <td className="font-semibold">
                                {product?.paqueteDimensiones.ancho} x {product?.paqueteDimensiones.largo} x {product?.paqueteDimensiones.profundidad} cm, {product?.peso}g
                            </td>
                        </tr>
                        <tr>
                            <td>Garantía</td>
                            <td className="px-2">:</td>
                            <td className="font-semibold">
                                {product?.garantia}
                            </td>
                        </tr>
                        <tr>
                            <td>Envío</td>
                            <td className="px-2">:</td>
                            <td className="font-semibold">
                                {product?.envio}
                            </td>
                        </tr>
                        <tr>
                            <td>Politica Devolución</td>
                            <td className="px-2">:</td>
                            <td className="font-semibold">
                                {product?.politicaDevolucion}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductDetails
