import { Product } from "@/types"
import ProductCardCompact from "../cards/ProductCardCompact"

function ProductList({ products }: { products: Product[] }) {
    return (
        <>
            {products.map(product => <ProductCardCompact key={product.id} producto={product} />)}
        </>
    )
}

export default ProductList
