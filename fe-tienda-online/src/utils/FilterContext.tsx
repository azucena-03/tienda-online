import { createContext, ReactNode, useContext, useState } from "react";

type FilterContextProps = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    brand: string;
    setBrand: (brand: string) => void;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    size: number | undefined;
    setSize: (size: number | undefined) => void;
    price: number[] | undefined;
    setPrice: (price: number[] | undefined) => void;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [brand, setBrand] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("")
    const [size, setSize] = useState<number | undefined>(undefined)
    const [price, setPrice] = useState<number[] | undefined>(undefined)

    return (
        <FilterContext.Provider value={{
            searchQuery,
            setSearchQuery,
            brand,
            setBrand,
            selectedCategory,
            setSelectedCategory,
            size,
            setSize,
            price,
            setPrice
        }}>
            {children}
        </FilterContext.Provider >
    )
}

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (context === undefined) {
        throw new Error("useFilter must be used within a FilterProvider")
    }
    return context;
}

