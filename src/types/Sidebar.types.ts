import React from "react";

export interface SidebarItem {
    key: string;
    href: string;
    icon: string;
    title: string;
    /** Elemento opcional al final (badge, chip, etc.) */
    endContent?: React.ReactNode;
}