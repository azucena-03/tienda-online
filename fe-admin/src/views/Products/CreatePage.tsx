import AppBreadcrumb from "@/components/AppBreadcrumb"
import { Input } from "@/components/ui/input"
import { formSchema } from "@/utils/schemas"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useEffect, useState } from "react"
import { Check, ChevronsUpDown, CircleCheck, Image } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { cn } from "@/lib/utils"
import { fetchCategories } from "@/actions/CategoryAction"
import { Category, Etiqueta } from "@/types"
import { Progress } from "@/components/ui/progress"
import { fetchEtiquetas } from "@/actions/EtiquetaAction"
import { subirImagen } from "@/actions/ImagenAction"
import { registrarProducto } from "@/actions/ProductAction"

function CreatePage() {
    const [productoImagen, setProductoImagen] = useState({ url: "https://placehold.co/500x280", nombre: "" })
    const [categorias, setCategorias] = useState<Category[]>([])
    const [etiquetas, setEtiquetas] = useState<Etiqueta[]>([])
    const [imagenFile, setImagenFile] = useState<File | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const [categoriasData, etiquetasData] = await Promise.all([
                fetchCategories(),
                fetchEtiquetas()
            ]);

            if (categoriasData) setCategorias(categoriasData);
            if (etiquetasData) setEtiquetas(etiquetasData);
        };

        fetchData();
    }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nombre: "",
            descripcion: "",
            marca: "",
            stock: 0,
            talla: "",
            categoriaId: "",
            precio: 0.0,
            promocion: 0.0,
            imagenUrl: "",
            listaEtiquetas: []
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            if (!imagenFile) {
                console.error("No hay imagen seleccionada");
                return;
            }

            const imageUrl = await subirImagen(imagenFile);
            if (!imageUrl) {
                console.error("No se pudo subir la imagen");
                return;
            }

            const productoData = {
                ...values,
                imagenUrl: imageUrl,
            };

            const success = await registrarProducto(productoData);

            if (success) {
                alert("Producto registrado con éxito.");
            } else {
                alert("Error al registrar producto.");
            }
        } catch (error) {
            console.error("Error en registro:", error);
        }
    }

    const handleProductImageChange = (event: any) => {
        const file = event.target.files[0]
        if (file) {
            setProductoImagen({ url: URL.createObjectURL(file), nombre: file.name })
            setImagenFile(file);
        }
    }

    return (
        <div>
            <div className="mb-8">
                <h2 className="capitalize text-2xl font-semibold">producto detalle</h2>
                <AppBreadcrumb />
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-x-12 p-6 rounded-xl shadow-md bg-white">
                    <div className="flex flex-col gap-y-6 grow-1">
                        <FormField
                            control={form.control}
                            name="nombre"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Producto Nombre</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Escribe el nombre aquí" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="descripcion"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Descripción</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Escribe la descripción aquí"
                                            className="h-[180px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="categoriaId"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Categoria</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    className={cn(
                                                        "border-black justify-between",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value
                                                        ? categorias.find(
                                                            (categoria) => categoria.categoriaId === field.value
                                                        )?.nombre
                                                        : "Selecciona la categoria"}
                                                    <ChevronsUpDown className="opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-full p-0">
                                            <Command>
                                                <CommandInput
                                                    placeholder="Buscar categoria.."
                                                    className="h-9"
                                                />
                                                <CommandList>
                                                    <CommandEmpty>No se encontro categoria.</CommandEmpty>
                                                    <CommandGroup>
                                                        {categorias.map((categoria) => (
                                                            <CommandItem
                                                                value={categoria.nombre}
                                                                key={categoria.categoriaId}
                                                                onSelect={() => {
                                                                    form.setValue("categoriaId", categoria.categoriaId)
                                                                }}
                                                            >
                                                                {categoria.nombre}
                                                                <Check
                                                                    className={cn(
                                                                        "ml-auto",
                                                                        categoria.categoriaId === field.value
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                    )}
                                                                />
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="marca"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Marca Nombre</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Escribe el nombre de la marca aquí" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex flex-col gap-y-6">
                            <div className="flex justify-between gap-x-6">
                                <FormField
                                    control={form.control}
                                    name="talla"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Talla</FormLabel>
                                            <FormControl>
                                                <Input placeholder="ejem: 42" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="stock"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Stock Cantidad</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="123" {...field} onChange={(e) => field.onChange(e.target.valueAsNumber)} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex gap-x-6">
                                <FormField
                                    control={form.control}
                                    name="precio"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Precio Regular</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="$1000" {...field} className="w-full" onChange={(e) => field.onChange(e.target.valueAsNumber)} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="promocion"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Precio Promoción</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="$1000" {...field} onChange={(e) => field.onChange(e.target.valueAsNumber)} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                            </div>
                        </div>

                        <FormField
                            control={form.control}
                            name="listaEtiquetas"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Etiquetas</FormLabel>
                                    <div className="flex flex-col gap-2">
                                        {etiquetas.map((etiqueta) => (
                                            <div key={etiqueta.etiquetaId} className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    id={`etiqueta-${etiqueta.etiquetaId}`}
                                                    value={etiqueta.etiquetaId}
                                                    checked={field.value.includes(etiqueta.etiquetaId)}
                                                    onChange={(e) => {
                                                        const isChecked = e.target.checked;
                                                        const value = etiqueta.etiquetaId;
                                                        const newValue = isChecked
                                                            ? [...field.value, value]
                                                            : field.value.filter((v) => v !== value);

                                                        field.onChange(newValue);
                                                    }}
                                                />
                                                <FormLabel htmlFor={`etiqueta-${etiqueta.etiquetaId}`}>
                                                    {etiqueta.nombre}
                                                </FormLabel>
                                            </div>
                                        ))}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grow-0 flex flex-col gap-y-6 max-w-[457px]">
                        <div className="relative w-full">
                            <div className="aspect-w-16 aspect-h-9">
                                <img
                                    src={productoImagen.url}
                                    alt="Image"
                                    className="rounded-md object-cover w-full h-[444px]"
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold mb-1.5">Producto Imagen</h3>
                            <button type="button" className="border-[#232321] border-dashed border p-4 w-full rounded-md">
                                <label htmlFor="product-image" className="cursor-pointer">
                                    <Image className="text-[#4A69E2] mx-auto mb-4" size={54} />
                                    <p className="text-base font-semibold text-[#70706E]">Selecciona una imagen para subir (JPEG o PNG).</p>
                                </label>
                                <input type="file" id="product-image" accept="image/*" className="hidden" onChange={handleProductImageChange} />
                            </button>
                        </div>

                        <div className="flex justify-between gap-x-4 items-center bg-[#FAFAFA] p-4 rounded-md shadow-sm">
                            <img src={productoImagen.url} alt="producto imagen" width={100} className="rounded-md" />
                            <div className="w-full">
                                <h4 className="mb-4 font-semibold">{productoImagen.nombre}</h4>
                                <Progress value={50} />
                            </div>
                            <CircleCheck size={32} className="text-[#4A69E2]" />
                        </div>

                        <div className="flex justify-between">
                            <Button variant="default" className="uppercase w-[48%]" type="submit">registrar</Button>
                            <Button variant="outline" className="uppercase w-[48%]">cancelar</Button>
                        </div>

                    </div>
                </form>
            </Form>
        </div>
    )
}


export default CreatePage
