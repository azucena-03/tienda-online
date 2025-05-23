import AuthSwiper from "@/components/swipers/AuthSwiper"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

function LoginPage() {
    return (
        <div className="px-4 md:px-0 py-6 grid md:grid-cols-3 gap-x-5">
            <div className="flex flex-col gap-y-5 col-span-2 pl-10">
                <div>
                    <h1 className="text-xl font-bold mb-2 leading-1">Iniciar Sesión</h1>
                    <span className="text-xs font-semibold underline">¿Olvidaste tu Contraseña?</span>
                </div>
                <div className="flex gap-x-5">
                    <Input placeholder="Correo" />
                    <Input placeholder="Contraseña" />
                </div>
                <div className="items-top flex space-x-2">
                    <Checkbox id="terms1" />
                    <div className="grid gap-1.5 leading-none">
                        <label
                            htmlFor="terms1"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet.
                        </label>
                        <p className="text-sm text-[#232321] underline">
                            Más Información
                        </p>
                    </div>
                </div>
                <Button className="bg-[#232321] uppercase flex justify-between">
                    <span>Iniciar Sesión</span>
                    <ArrowRight />
                </Button>
                <span className="text-xs font-semibold underline text-end">¿No tienes una cuenta aún?</span>
            </div>

            <div>
                <AuthSwiper />
            </div>
        </div>
    )
}

export default LoginPage
