import { useLocalStorage } from "@/hooks/useLocalStorage"
import { createContext, ReactNode, useContext } from "react"

type CartContextProps = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

type CartProviderProps = {
    children: ReactNode
}

export type CartItem = {
    id: number
    quantity: number
}

const CartContext = createContext({} as CartContextProps);

export const useCart = () => {
    return useContext(CartContext)
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
        "shopping-cart",
        []
    )

    const getItemQuantity = (id: number) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    const increaseCartQuantity = (id: number) => {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decreaseCartQuantity = (id: number) => {
        setCartItems(currItems => {
            if (currItems.find(item => item.id == id)?.quantity == 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeFromCart = (id: number) => {
        setCartItems(currItems => {
            return currItems.filter(Item => Item.id !== id)
        })
    }

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    return <CartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems, cartQuantity }}>
        {children}
    </CartContext.Provider>
}