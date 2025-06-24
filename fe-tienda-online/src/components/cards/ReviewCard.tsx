import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formattedDate } from "@/utils/utils";

type ReviewCardProps = {
    comentario: {
        valuacion: number;
        comentario: string;
        titulo: string;
        fecha: string;
        nombre: string;
        correo: string;
    }
}

export default function ReviewCard({ comentario }: ReviewCardProps) {
    const renderStarts = (rating: number) => {
        const starts = [];
        for (let i = 0; i < rating; i++) {
            starts.push(<img src={"/star-rate.svg"} />);
        }
        return starts;
    };
    return (
        <Card>
            <CardHeader className="space-y-1.5 text-xs font-light">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                        {renderStarts(comentario.valuacion)}
                    </div>
                    <span className="text-caption">{formattedDate(new Date(comentario.fecha))}</span>
                </div>
                <CardTitle className="text-sm">{comentario.titulo}</CardTitle>
                <span className="text-caption">{comentario.nombre}</span>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-caption text-xs">{comentario.comentario}</CardDescription>
            </CardContent>
        </Card>
    )
}
