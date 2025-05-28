import AppBreadcrumb from "@/components/common/AppBreadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

function LoginPage() {
    return (
        <section>
            <AppBreadcrumb />
            <div className="grid sm:place-items-center">
                <div className="flex flex-col gap-y-5 sm:border sm:px-4 sm:py-6 rounded-md shadow-xs md:w-5/12">
                    <div className="sm:text-center">
                        <h1 className="text-xl font-bold mb-2 leading-1">Iniciar Sesión</h1>
                        <span className="text-xs text-caption">Accede a tu cuenta para continuar</span>
                    </div>

                    <div className="space-y-3">
                        <Input placeholder="Correo" />
                        <Input placeholder="Contraseña" />
                        <span className="text-xs text-caption hover:underline hover:cursor-pointer">¿Olvidaste tu Contraseña?</span>
                    </div>
                    <Button variant={"base"} className="capitalize flex justify-between">
                        <span>Ingresar</span>
                        <ArrowRight />
                    </Button>
                    <Link to="/nuevo-registro">
                        <span className="text-xs text-caption text-center hover:underline hover:cursor-pointer">¿No tienes una cuenta aún? Crear cuenta</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default LoginPage
