import { Menu } from "lucide-react"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { Separator } from "../ui/separator"

function MobileNav() {
    const [open, setOpen] = useState(false);
    return (
        <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant="outline">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side={"left"} className="text-lg font-light">
                    <SheetHeader>
                        <SheetTitle>Menú</SheetTitle>
                    </SheetHeader>
                    <div className="px-4 space-y-4">
                        <ul className="flex flex-col gap-4 mb-12">
                            <Link to="/productos/" onClick={() => setOpen(false)}>Mujer</Link>
                            <Link to="/productos/" onClick={() => setOpen(false)}>Hombre</Link>
                            <Link to="/productos/" onClick={() => setOpen(false)}>Unisex</Link>
                            <Link to="/sobre-nosotros" onClick={() => setOpen(false)}>Sobre Nosotros</Link>
                        </ul>
                        <Separator className="" />
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-lg hover:no-underline">Acceso</AccordionTrigger>
                                <AccordionContent>
                                    <ul className="flex flex-col gap-4">
                                        <Link to="/inicio-sesion" onClick={() => setOpen(false)}>Iniciar Sesion</Link>
                                        <Link to="/nuevo-registro" onClick={() => setOpen(false)}>Registrarse</Link>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        {/* <Collapsible
                            open={isOpen}
                            onOpenChange={setIsOpen}
                            className="w-full space-y-2"
                        >
                            <div className="flex items-center justify-between space-x-4 px-4">
                                <h4 className="text-sm font-semibold">
                                    Categorias
                                </h4>
                                <CollapsibleTrigger asChild>
                                    <Button variant="ghost" size="sm">
                                        <ChevronsUpDown className="h-4 w-4" />
                                        <span className="sr-only">Toggle</span>
                                    </Button>
                                </CollapsibleTrigger>
                            </div>
                            <CollapsibleContent className="space-y-2">
                                {categorias.map((categoria) => (
                                    <div key={categoria.value} className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                                        {categoria.label}
                                    </div>
                                ))}
                            </CollapsibleContent>
                        </Collapsible> */}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNav
