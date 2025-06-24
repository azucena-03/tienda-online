import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Product } from "@/types";
import { createContext, ReactNode, useContext } from "react";

type FavoriteContextProps = {
    handleClickFavorite: (product: Product) => void;
    favoriteExists: (id: Product["id"]) => boolean;
    favoriteItems: Product[]
}

const FavoriteContext = createContext<FavoriteContextProps | undefined>(undefined)

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
    const [favoriteItems, setFavoriteItems] = useLocalStorage<Product[]>("favorites",
        [])

    const favoriteExists = (id: Product["id"]) => {
        return favoriteItems.some((favorite) => favorite.id === id);
    }

    const handleClickFavorite = (product: Product) => {
        setFavoriteItems(currFavorite => {
            if (favoriteExists(product.id)) {
                console.log("haciendo filtrado de :", product.id)
                return currFavorite.filter((favorite) => favorite.id !== product.id)
            } else {
                return [...currFavorite, product]
            }
        })

    }

    return <FavoriteContext.Provider value={{ favoriteItems, handleClickFavorite, favoriteExists }}>
        {children}
    </FavoriteContext.Provider>
}

export const useFavorite = () => {
    const context = useContext(FavoriteContext);
    if (context === undefined) {
        throw new Error("useFavorite must be used within a FavoriteProvider")
    }
    return context;
}