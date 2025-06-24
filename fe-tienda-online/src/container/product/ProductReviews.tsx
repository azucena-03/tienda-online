import ReviewCard from "@/components/cards/ReviewCard";
import { Button } from "@/components/ui/button";
import { productos } from "@/utils/data";
import { useState } from "react";

type ProductReviewsProps = {
    productId: string | undefined
}

export default function ProductReviews({ productId }: ProductReviewsProps) {
    const product = productos.find(p => p.id === Number(productId));
    const comments = product?.comentarios ?? [];

    const [visibleCount, setVisibleCount] = useState(2);
    const visibleComments = comments.slice(0, visibleCount);

    const fetchMoreComments = () => {
        if (visibleComments.length >= comments.length) {
            setVisibleCount(2);
        } else {
            setVisibleCount(prev => prev + 2);
        }
    };

    return (
        <div className="space-y-2 font-light">
            <h2>Reseñas de usuarios</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {visibleComments.map(comentario => (
                    <ReviewCard comentario={comentario} />
                ))}
            </div>
            <div className="text-center">
                <Button variant={"outline"} className="capitalize border-primary" onClick={fetchMoreComments}>
                    {visibleComments.length >= comments.length ? "ver menos" : "cargar más reseñas"}
                </Button>
            </div>
        </div>
    )
}
