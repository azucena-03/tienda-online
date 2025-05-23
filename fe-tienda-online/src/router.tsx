import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import IndexPage from "./views/IndexPage"
import NotFoundPage from "./views/NotFoundPage"
import Layout from "./layout/Layout"
import ListaPage from "./views/ListaPage"
import SingupPage from "./views/SingupPage"
import LoginPage from "./views/LoginPage"
import AboutUsPage from "./views/AboutUsPage"

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" index element={<IndexPage />} />
                    <Route path="/productos" element={<ListaPage />} />
                    <Route path="/sobre-nosotros" element={<AboutUsPage />} />
                    <Route path="/inicio-sesion" element={<LoginPage />} />
                    <Route path="/nuevo-registro" element={<SingupPage />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter
