import AuthSwiper from "@/components/swipers/AuthSwiper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowRight } from "lucide-react"


function SingupPage() {
    return (
        <div className="px-4 md:px-0 py-6 grid md:grid-cols-3 gap-x-5">
            <div className="flex flex-col gap-y-5 col-span-2 pl-10">
                <h1 className="text-xl font-bold">Registrar</h1>
                <div className="flex flex-col gap-y-4">
                    <h2 className="font-bold">Nombre</h2>
                    <div className="flex gap-x-5">
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
                    <div className="flex gap-x-5">
                        <Input placeholder="Correo" />
                        <Input placeholder="Nombre De Usuario" />

                    </div>
                    <div className="flex gap-x-5">
                        <Input placeholder="Contraseña" />
                        <Input placeholder="Confirmar Contraseña" />
                    </div>
                </div>
                <Button className="bg-[#232321] uppercase flex justify-between w-1/2">
                    <span>Registrarse</span>
                    <ArrowRight />
                </Button>
            </div>

            <div>
                <AuthSwiper />
            </div>
        </div>
    )
}

export default SingupPage
