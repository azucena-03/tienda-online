import { FileText, FolderOpen, Grid } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent, SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar"

const items = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: Grid,
    },
    {
        title: "All Products",
        url: "/products",
        icon: FolderOpen,
    },
    {
        title: "Order List",
        url: "/orderlist",
        icon: FileText,
    },

]

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="mb-4">
                <img src="/logo.png" alt="logo" className="w-1/2 mx-auto mt-4" />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url} className="px-5 py-5 mb-4">
                                            <item.icon />
                                            <span className="text-sm font-medium tracking-wide uppercase">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}