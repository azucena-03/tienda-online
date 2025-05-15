import Footer from "@/components/footer/Footer"
import Header from "@/components/navegacion/Header"
import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <>
            <Header />
            <main className="container mx-auto">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout
