import type { SidebarItem } from "@/types/Sidebar.types";

export const sidebarItems: SidebarItem[] = [
    { key: "home", href: "/", icon: "lucide:home", title: "Home" },
    { key: "vinculaciones", href: "/vinculaciones", icon: "lucide:link", title: "Vinculaciones" },
    { key: "operaciones", href: "/operaciones", icon: "lucide:settings", title: "Operaciones" },
    { key: "usuarios", href: "/usuarios", icon: "lucide:users", title: "Usuarios" },
    { key: "empresas", href: "/empresas", icon: "lucide:building", title: "Empresas" },
    { key: "listas", href: "/listas", icon: "lucide:list-x", title: "Listas Bloqueantes" },
];