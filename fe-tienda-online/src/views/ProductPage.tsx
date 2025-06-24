import AppBreadcrumb from "@/components/common/AppBreadcrumb";
import FeaturedSection from "@/container/index/FeaturedSection";
import ProductDetails from "@/container/product/ProductDetails";
import ProductReviews from "@/container/product/ProductReviews";

import { useParams } from "react-router-dom";

function ProductPage() {
    const { id } = useParams<{ id: string }>();

    return (
        <section>
            <AppBreadcrumb />
            <ProductDetails productId={id} />
            <ProductReviews productId={id} />
            <FeaturedSection />
        </section >
    )
}

export default ProductPage
