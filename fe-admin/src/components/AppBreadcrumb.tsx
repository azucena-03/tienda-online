import { useLocation } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb"
import React from "react";

function AppBreadcrumb() {
    const location = useLocation();
    const segments = location.pathname.split("/").filter(Boolean);

    const breadcrumbMap: Record<string, string> = {
        dashboard: "Inicio",
        products: "Lista Productos",
        new: "Agregar Producto",
        detail: "Producto Detalle",
    };


    return (
        <Breadcrumb className="text-base font-semibold">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard">Inicio</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {segments.map((segment, index) => {
                    const href = "/" + segments.slice(0, index + 1).join("/");
                    const isLast = index === segments.length - 1;
                    const label = breadcrumbMap[segment] || segment;

                    return (
                        <React.Fragment key={href}>
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage>{label}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {!isLast && <BreadcrumbSeparator />}
                        </React.Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );


    // return (
    //     <Breadcrumb>
    //         <BreadcrumbList>
    //             <BreadcrumbItem>
    //                 <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
    //             </BreadcrumbItem>
    //             <BreadcrumbSeparator />
    //             <BreadcrumbItem>
    //                 <BreadcrumbPage>All Products</BreadcrumbPage>
    //             </BreadcrumbItem>
    //         </BreadcrumbList>
    //     </Breadcrumb>
    // )
}

export default AppBreadcrumb
