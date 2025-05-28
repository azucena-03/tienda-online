import { ChevronsUpDown, Menu } from "lucide-react"
import { Button } from "../ui/button"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { useState } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"

const categorias = [
    {
        value: "urbano",
        label: "Urbano",
    },
    {
        value: "clasicas",
        label: "Clasicas",
    }
]


function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="px-4 py-2 border p-1 shadow-xs text-[#272343] md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side={"left"}>
                    <SheetHeader>
                        <SheetTitle>Menú</SheetTitle>
                    </SheetHeader>
                    <div className="grid gap-4 py-4 place-content-center">
                        <Collapsible
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
                        </Collapsible>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>

                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNav
