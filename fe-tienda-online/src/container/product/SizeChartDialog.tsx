import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RulerDimensionLine } from "lucide-react";

const chartData = [
    { size: 36, cm: 23.3 },
    { size: 37, cm: 23.9 },
    { size: 38, cm: 24.7 },
    { size: 39, cm: 25.2 },
    { size: 40, cm: 26.1 },
    { size: 41, cm: 26.5 },
    { size: 42, cm: 27.4 },
    { size: 43, cm: 28.3 },
    { size: 44, cm: 28.8 },
]

function SizeChartDialog() {
    return (
        <Dialog>
            <DialogTrigger className="text-caption hover:underline flex gap-x-2 ml-auto items-center">
                <RulerDimensionLine className="text-caption" absoluteStrokeWidth={true} strokeWidth="1" />
                <span className="text-xs hidden sm:block md:hidden lg:block">Guía de tallas</span>
            </DialogTrigger>
            <DialogContent className="overflow-y-scroll h-4/5 rounded-xs">
                <DialogHeader>
                    <DialogTitle>TALLAS DE CALZADO</DialogTitle>
                    <DialogDescription className="text-xs">Consulta aquí la equivalencia de tallas para elegir el calzado perfecto.</DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-neutral-700 hover:bg-neutral-700">
                                <TableHead className="text-neutral-400 font-medium w-1/2">Talla</TableHead>
                                <TableHead className="text-neutral-400 font-medium text-end">Punta - Talón</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {chartData.map(({ size, cm }) => (
                                <TableRow className="hover:bg-transparent">
                                    <TableCell className="font-medium">{size}</TableCell>
                                    <TableCell className="text-end">{cm} cm</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="space-y-4">
                        <h2>¿Cómo medir?</h2>
                        <img src="/foot.webp" alt="foot" className="rounded-xs" />
                        <p className="text-xs text-center">Mide el largo del pie desde el talón hasta la punta y luego ajusta según la tabla de tallas indicada arriba.</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default SizeChartDialog
