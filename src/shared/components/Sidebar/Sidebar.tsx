import type { SidebarItem } from "@/types/Sidebar.types";
import {
    Chip, ScrollShadow, Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button, Avatar, User, Badge, Popover, PopoverTrigger, PopoverContent, Spacer, Select, SelectSection, SelectItem, Input
} from "@heroui/react";
import { Icon } from "@iconify/react";
import SidebarBase from "./SidebarBase";
import type { SidebarProps as BaseSidebarProps } from "./SidebarBase";

const sidebarItems: SidebarItem[] = [
    {
        key: "home",
        href: "#",
        icon: "lucide:home",
        title: "Home",
    },
    {
        key: "vinculaciones",
        href: "#",
        icon: "lucide:link",
        title: "Vinculaciones",
        endContent: (
            <Chip size="sm" variant="flat">
                24
            </Chip>
        ),
    },
    {
        key: "operaciones",
        href: "#",
        icon: "lucide:settings",
        title: "Operaciones",
        endContent: (
            <Chip size="sm" variant="flat">
                12
            </Chip>
        ),
    },
    {
        key: "usuarios",
        href: "#",
        icon: "lucide:users",
        title: "Usuarios",
    },
    {
        key: "empresas",
        href: "#",
        icon: "lucide:building",
        title: "Empresas",
    },
    {
        key: "listas",
        href: "#",
        icon: "lucide:list-x",
        title: "Listas Bloqueantes",
    },
];

const workspaces = [
    {
        value: "0",
        label: "Ambientes",
        items: [
            {
                value: "1",
                label: "Producción",
            },
            {
                value: "2",
                label: "Desarrollo",
            },
        ],
    },
];

const users = [
    {
        id: 1,
        name: "Kate Moore",
        role: "Customer Support",
        team: "Customer Support",
        avatar:
            "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/e1b8ec120710c09589a12c0004f85825.jpg",
        email: "kate.moore@example.com",
    },
    {
        id: 2,
        name: "John Doe",
        role: "Product Designer",
        team: "Design",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
        email: "john.doe@example.com",
    },
    {
        id: 3,
        name: "Jane Doe",
        role: "Product Manager",
        team: "Product",
        avatar: "https://i.pravatar.cc/150?u=a04258114e22026708c",
        email: "jane.doe@example.com",
    },
];

export interface SidebarProps extends BaseSidebarProps { }

export default function Sidebar({
    className,
    defaultSelectedKey = "home",
    ...props
}: SidebarProps) {
    return (
        <div className="h-full min-h-[48rem]">
            <div className="relative flex h-full w-72 flex-1 flex-col border-r-small border-divider p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 px-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
                            {/* <AcmeIcon className="text-background" /> */}
                        </div>
                        <span className="text-small font-bold uppercase">Acme</span>
                    </div>
                    <div className="flex items-center justify-end">
                        {/* User Menu */}
                        <Dropdown showArrow placement="bottom-start">
                            <DropdownTrigger>
                                <Button disableRipple isIconOnly className="-mr-1" radius="full" variant="light">
                                    <Avatar
                                        className="h-6 w-6 cursor-pointer"
                                        name="Kate Moore"
                                        src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/e1b8ec120710c09589a12c0004f85825.jpg"
                                    />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Custom item styles" disabledKeys={["profile"]}>
                                <DropdownSection showDivider aria-label="Profile & Actions">
                                    <DropdownItem
                                        key="profile"
                                        isReadOnly
                                        className="h-14 gap-2 opacity-100"
                                        textValue="Signed in as"
                                    >
                                        <User
                                            avatarProps={{
                                                size: "sm",
                                                imgProps: {
                                                    className: "transition-none",
                                                },
                                                src: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/e1b8ec120710c09589a12c0004f85825.jpg",
                                            }}
                                            classNames={{
                                                name: "text-default-600",
                                                description: "text-default-500",
                                            }}
                                            description="Customer Support"
                                            name="Kate Moore"
                                        />
                                    </DropdownItem>
                                    <DropdownItem key="dashboard">Dashboard</DropdownItem>
                                    <DropdownItem key="settings">Settings</DropdownItem>
                                    <DropdownItem
                                        key="new_project"
                                        endContent={<Icon className="text-large" icon="lucide:plus" />}
                                    >
                                        New Project
                                    </DropdownItem>
                                </DropdownSection>

                                <DropdownSection showDivider aria-label="Preferences">
                                    <DropdownItem key="quick_search" shortcut="⌘K">
                                        Quick search
                                    </DropdownItem>
                                    <DropdownItem
                                        key="theme"
                                        isReadOnly
                                        className="cursor-default"
                                        endContent={
                                            <select
                                                className="z-10 w-16 rounded-md border-small border-default-300 bg-transparent py-0.5 text-tiny text-default-500 outline-none group-data-[hover=true]:border-default-500 dark:border-default-200"
                                                id="theme"
                                                name="theme"
                                            >
                                                <option>System</option>
                                                <option>Dark</option>
                                                <option>Light</option>
                                            </select>
                                        }
                                    >
                                        Theme
                                    </DropdownItem>
                                </DropdownSection>

                                <DropdownSection aria-label="Help & Feedback">
                                    <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                                    <DropdownItem key="logout">Log Out</DropdownItem>
                                </DropdownSection>
                            </DropdownMenu>
                        </Dropdown>
                        {/* Notifications */}
                        <Popover offset={12} placement="bottom-start">
                            <PopoverTrigger>
                                <Button
                                    disableRipple
                                    isIconOnly
                                    className="overflow-visible"
                                    radius="full"
                                    variant="light"
                                >
                                    <Badge color="danger" content="5" showOutline={false} size="md">
                                        <Icon className="text-default-500" icon="solar:bell-linear" width={22} />
                                    </Badge>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="max-w-[90vw] p-0 sm:max-w-[380px]">
                                <div>test</div>
                                {/* <NotificationsCard className="w-full shadow-none" /> */}
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

                <Spacer y={8} />

                <div className="flex flex-col gap-y-2">
                    <Select
                        disableSelectorIconRotation
                        aria-label="Select workspace"
                        className="px-1"
                        classNames={{
                            trigger:
                                "min-h-14 bg-transparent border-small border-default-200 dark:border-default-100 data-[hover=true]:border-default-500 dark:data-[hover=true]:border-default-200 data-[hover=true]:bg-transparent",
                        }}
                        defaultSelectedKeys={["1"]}
                        items={workspaces}
                        listboxProps={{
                            bottomContent: (
                                <Button
                                    className="bg-default-100 text-center text-foreground"
                                    size="sm"
                                    onPress={() => console.log("on create workspace")}
                                >
                                    New Workspace
                                </Button>
                            ),
                        }}
                        placeholder="Select workspace"
                        renderValue={(items) => {
                            return items.map((item) => (
                                <div key={item.key} className="ml-1 flex flex-col gap-y-0.5">
                                    <span className="text-tiny leading-4">Acme Inc.</span>
                                    <span className="text-tiny text-default-400">{item.data?.label}</span>
                                </div>
                            ));
                        }}
                        selectorIcon={
                            <Icon color="hsl(var(--heroui-default-500))" icon="lucide:chevrons-up-down" />
                        }
                        startContent={
                            <div className="relative h-10 w-10 flex-none rounded-full border-small border-default-300">
                                <Icon
                                    className="ml-2 mt-2 text-default-500"
                                    icon="solar:users-group-rounded-linear"
                                    width={24}
                                />
                            </div>
                        }
                    >
                        {(section: SidebarItem) => (
                            <SelectSection
                                key={section.value}
                                hideSelectedIcon
                                showDivider
                                aria-label={section.label}
                                items={section.items}
                                title={section.label}
                            >
                                {/* @ts-ignore */}
                                {(item: SidebarItem) => (
                                    <SelectItem key={item.value} aria-label={item.label} textValue={item.label}>
                                        <div className="flex flex-row items-center justify-between gap-1">
                                            <span>{item.label}</span>
                                            <div className="flex h-6 w-6 items-center justify-center rounded-full border-small border-default-300">
                                                <Icon
                                                    className="text-default-500"
                                                    icon="solar:users-group-rounded-linear"
                                                    width={16}
                                                />
                                            </div>
                                        </div>
                                    </SelectItem>
                                )}
                            </SelectSection>
                        )}
                    </Select>
                    <Input
                        fullWidth
                        aria-label="search"
                        classNames={{
                            base: "px-1",
                            inputWrapper: "dark:bg-default-50",
                        }}
                        labelPlacement="outside"
                        placeholder="Search..."
                        startContent={
                            <Icon
                                className="text-default-500 [&>g]:stroke-[2px]"
                                icon="solar:magnifer-linear"
                                width={18}
                            />
                        }
                    />
                </div>

                <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
                    <SidebarBase
                        defaultSelectedKey={defaultSelectedKey}
                        iconClassName="group-data-[selected=true]:text-primary-foreground"
                        itemClasses={{
                            base: "data-[selected=true]:bg-primary-400 dark:data-[selected=true]:bg-primary-300 data-[hover=true]:bg-default-300/20 dark:data-[hover=true]:bg-default-200/40",
                            title: "group-data-[selected=true]:text-primary-foreground",
                        }}
                        items={sidebarItems}
                    />
                </ScrollShadow>

                <Dropdown placement="top">
                    <DropdownTrigger>
                        <Button className="mb-4 h-16 items-center justify-between" variant="light">
                            <User
                                avatarProps={{
                                    size: "sm",
                                    isBordered: false,
                                    src: users[0].avatar,
                                }}
                                className="justify-start transition-transform"
                                description={users[0].role}
                                name={users[0].name}
                            />
                            <Icon className="text-default-400" icon="lucide:chevrons-up-down" width={16} />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Account switcher"
                        variant="flat"
                        onAction={(key) => console.log(`selected user ${key}`)}
                    >
                        {users.map((user) => (
                            <DropdownItem key={user.id} textValue={user.name}>
                                <div className="flex items-center gap-x-3">
                                    <Avatar
                                        alt={user.name}
                                        classNames={{
                                            base: "flex-shrink-0",
                                            img: "transition-none",
                                        }}
                                        size="sm"
                                        src={user.avatar}
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-small font-medium text-default-600">{user.name}</p>
                                        <p className="text-tiny text-default-400">{user.email}</p>
                                    </div>
                                </div>
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    );
}