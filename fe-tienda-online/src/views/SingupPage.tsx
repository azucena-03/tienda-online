import AppBreadcrumb from "@/components/common/AppBreadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"


function SingupPage() {
    return (
        <section>
            <AppBreadcrumb />
            <div className="grid sm:place-items-center">
                <div className="flex flex-col gap-y-5 col-span-2 sm:border sm:shadow-sm sm:rounded-md sm:px-4 sm:py-6 md:w-7/12">
                    <div className="sm:text-center">
                        <h1 className="text-xl font-bold">Crea tu cuenta</h1>
                        <span className="text-xs text-caption">Completa tu perfil para comenzar</span>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <h2 className="font-bold">Nombre</h2>
                        <div className="sm:flex gap-x-5 space-y-4 sm:space-y-0">
                            <Input placeholder="Nombres" />
                            <Input placeholder="Apellidos" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <label className="font-bold">Genero</label>
                        <RadioGroup defaultValue="comfortable" className="flex gap-x-8">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="hombre" id="r1" />
                                <Label htmlFor="r1">Hombre</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="mujer" id="r2" />
                                <Label htmlFor="r2">Mujer</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="otro" id="r3" />
                                <Label htmlFor="r3">Otro</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <h2 className="font-bold capitalize">Detalles de cuenta</h2>
                        <div className="sm:flex gap-x-5 space-y-4 sm:space-y-0">
                            <Input placeholder="Correo" />
                            <Input placeholder="Nombre De Usuario" />
                        </div>
                        <div className="sm:flex gap-x-5 space-y-4 sm:space-y-0">
                            <Input placeholder="Contraseña" />
                            <Input placeholder="Confirmar Contraseña" />
                        </div>
                    </div>
                    <Button variant={"base"} className="flex justify-between">
                        <span>Comenzar</span>
                        <ArrowRight />
                    </Button>
                    <Link to="/inicio-sesion" className="text-center">
                        <span className="text-xs text-caption hover:underline hover:cursor-pointer">¿Ya tienes cuenta? Accede aquí</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default SingupPage
