import React from "react";
import { Sidebar } from "../Sidebar";
import { sidebarItems } from "../Sidebar/Sidebar.config";

export interface LayoutProps {
    children: React.ReactNode;
    defaultSelectedKey?: string;
}

export function Layout({ children, defaultSelectedKey = "home" }: LayoutProps) {
    return (
        <div className="flex h-full">
            <Sidebar defaultSelectedKey={defaultSelectedKey} items={sidebarItems} />
            <main className="flex-1 p-6 overflow-auto">{children}</main>
        </div>
    );
}