import Footer from "@/components/footer/Footer"
import Header from "@/components/navigation/Header"
import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4 lg:px-[3.75rem]">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout
