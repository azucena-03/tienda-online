import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import IndexPage from "./views/IndexPage"
import NotFoundPage from "./views/NotFoundPage"
import Layout from "./layout/Layout"
import SingupPage from "./views/SingupPage"
import LoginPage from "./views/LoginPage"
import AboutUsPage from "./views/AboutUsPage"
import ListPage from "./views/ListPage"
import ProductPage from "./views/ProductPage"
import { ThemeProvider } from "./context/themeProvider"
import CartPage from "./views/CartPage"
import { CartProvider } from "./context/CartContext"
import { FavoriteProvider } from "./context/FavoriteContext"
import FavoritePage from "./views/FavoritePage"

function AppRouter() {
    return (
        <Router>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <CartProvider>
                    <FavoriteProvider>
                        <Routes>
                            <Route element={<Layout />}>
                                <Route path="/" index element={<IndexPage />} />
                                <Route path="/productos" element={<ListPage />} />
                                <Route path="/sobre-nosotros" element={<AboutUsPage />} />
                                <Route path="/inicio-sesion" element={<LoginPage />} />
                                <Route path="/nuevo-registro" element={<SingupPage />} />
                                <Route path="/productos/:id" element={<ProductPage />} />
                                <Route path="/carrito" element={<CartPage />} />
                                <Route path="/favoritos" element={<FavoritePage />} />
                                <Route path="*" element={<NotFoundPage />} />
                            </Route>
                        </Routes>
                    </FavoriteProvider>
                </CartProvider>
            </ThemeProvider>
        </Router>
    )
}

export default AppRouter
