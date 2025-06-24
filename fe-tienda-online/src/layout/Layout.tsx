import Footer from "@/components/footer/Footer"
import MainNav from "@/components/navigation/MainNav"
import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <>
            <MainNav />
            <main className="container lg:max-w-[75rem] mx-auto px-4">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout
