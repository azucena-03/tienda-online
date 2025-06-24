import { useLocation } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import React from "react";
import { Slash } from "lucide-react";
import { productos } from "@/utils/data";

function AppBreadcrumb() {
    const location = useLocation();
    const segments = location.pathname.split("/").filter(Boolean);

    const breadcrumbMap: Record<string, string> = {
        productos: "Productos",
        "inicio-sesion": "Acceso",
        "nuevo-registro": "Registro",
        carrito: "Mi carrito",
        favoritos: "Favoritos",
        "sobre-nosotros": "Sobre Nosotros"

    };

    let productName: string;
    if (segments[0] === "productos" && segments[1]) {
        productName = productos.find(p => p.id === Number(segments[1]))?.nombre!
    }

    return (
        <Breadcrumb className="text-sm font-semibold py-6">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="text-xs">Inicio</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <Slash />
                </BreadcrumbSeparator>
                {segments.map((segment, index) => {
                    const href = "/" + segments.slice(0, index + 1).join("/");
                    const isLast = index === segments.length - 1;
                    const label = breadcrumbMap[segment] || (segments[0] === "productos" && index === 1 && productName) || segment;

                    return (
                        <React.Fragment key={href}>
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage className="w-40 sm:w-full truncate text-xs">{label}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={href} className="text-xs">{label}</BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {!isLast &&
                                <BreadcrumbSeparator>
                                    <Slash />
                                </BreadcrumbSeparator>
                            }
                        </React.Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );

}

export default AppBreadcrumb
