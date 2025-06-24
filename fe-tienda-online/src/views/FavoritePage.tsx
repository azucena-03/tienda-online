import ProductCard from "@/components/cards/ProductCard"
import AppBreadcrumb from "@/components/common/AppBreadcrumb"
import { useFavorite } from "@/context/FavoriteContext"

function FavoritePage() {
    const { favoriteItems } = useFavorite()

    return (
        <section>
            <AppBreadcrumb />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
                {favoriteItems.map(favorite => (
                    <ProductCard key={favorite.id} producto={favorite} />
                ))}
            </div>
        </section>
    )
}

export default FavoritePage
