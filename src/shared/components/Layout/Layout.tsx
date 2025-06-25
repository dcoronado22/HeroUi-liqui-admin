import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { sidebarItems } from "../Sidebar/Sidebar.config";

export interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="flex h-full">
            <Sidebar defaultSelectedKey="home" items={sidebarItems} />
            <main className="flex-1 p-6 overflow-auto">{children}</main>
        </div>
    );
}