import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import IndexPage from "./views/IndexPage"
import NotFoundPage from "./views/NotFoundPage"
import Layout from "./layout/Layout"
import ListaPage from "./views/ListaPage"

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" index element={<IndexPage />} />
                    <Route path="/productos" element={<ListaPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter
