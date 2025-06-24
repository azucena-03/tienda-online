import { HeartFilledIcon, HeartOutlineIcon } from "@/assets"
import { Button } from "../ui/button"
import { useFavorite } from "@/context/FavoriteContext"
import { Product } from "@/types"

type FavoriteControlsProps = {
    product: Product,
    variant: "favorite" | "primary" | "danger",
    absolutePosition?: string
}

function FavoriteControls({ product, variant, absolutePosition }: FavoriteControlsProps) {
    const { handleClickFavorite, favoriteExists } = useFavorite()
    return (
        <Button variant={variant} className={`${variant == "favorite" ? ` absolute ${absolutePosition}` : "rounded-2xl w-full"}`} onClick={() => handleClickFavorite(product!)}>
            {favoriteExists(product!.id) ? <HeartFilledIcon /> : <HeartOutlineIcon />}
        </Button>
    )
}

export default FavoriteControls
