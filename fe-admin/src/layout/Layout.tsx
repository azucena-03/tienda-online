import { AppSidebar } from "@/components/AppSidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full">
                <AppSidebar />
                <main className="size-[-webkit-fill-available] h-auto px-8 py-6 bg-[#E7E7E3]">
                    <SidebarTrigger />
                    <Outlet />
                </main>
            </div>
        </SidebarProvider>
    )
}

export default Layout
