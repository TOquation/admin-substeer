"use client";

import {
  Home,
  User2,
  ChevronUp,
  Users,
  Puzzle,
  Store,
  HeadphonesIcon,
  BarChart3,
  Code2,
  UserCog,
  ChevronRight,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "../ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Users",
    url: "/users",
    icon: Users,
    subItems: [
      { title: "Free", url: "/user/free" },
      { title: "Subscribers", url: "/user/subscribers" },
    ],
  },
  {
    title: "Integration",
    url: "/integration",
    icon: Puzzle,
  },
  {
    title: "Marketplace",
    url: "/marketplace",
    icon: Store,
  },
  {
    title: "Support",
    url: "/support",
    icon: HeadphonesIcon,
    subItems: [
      { title: "New Message", url: "/support/new-message", badge: 20 },
      { title: "New Tickets", url: "/support/new-tickets", badge: 20 },
    ],
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Developer tools",
    url: "/developer-tools",
    icon: Code2,
  },
  {
    title: "Admins",
    url: "/admins",
    icon: UserCog,
    subItems: [
      { title: "All Admins", url: "/admins/all" },
      { title: "Roles", url: "/admins/roles" },
      { title: "Review", url: "/admins/review", badge: 9 },
    ],
  },
];

const LeftSidebar = () => {
  const pathname = usePathname();

  // Helper function to check if a route is active
  const isActiveRoute = (url: string, hasSubItems?: boolean) => {
    if (url === "/") {
      return pathname === "/";
    }
    if (hasSubItems) {
      return pathname.startsWith(url);
    }
    return pathname === url;
  };

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader
        className="border-b xl:pb-[0.6rem] pb-[0.24rem] bg-white border-gray-200  transition-all duration-300 group-data-[collapsible=icon]:px-2 xl:group-data-[collapsible=icon]:py-[1.14rem] 
      group-data-[collapsible=icon]:py-[1rem]
      xl:group-data-[collapsible=icon]:pb-[1.11rem] "
      >
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              size="lg"
              className="h-auto py-[0.45rem] group-data-[collapsible=icon]:p-3 group-data-[collapsible=icon]:justify-center transition-all duration-300"
            >
              <Link href="/" className="flex items-center gap-2 transition-all">
                <Image
                  src="/images/logo-main.svg"
                  alt="logo"
                  width={34}
                  height={34}
                  className="transition-all group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:h-10"
                />
                <h3 className="font-medium text-2xl transition-all group-data-[collapsible=icon]:hidden">
                  Sub<span className="font-medium">steer</span>
                </h3>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className=" xl:group-data-[collapsible=icon]:bg-white xl:group-data-[collapsible=icon]: bg-white">
        {/* Favorites Section - Hidden when collapsed */}
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <div className="px-4 pt-3">
            {/* Tabs */}
            <div className="flex gap-6 text-sm text-gray-500 mb-4  justify-between">
              <button className="hover:text-gray-900 transition-colors font-medium">
                Favorites
              </button>
              <button className="hover:text-gray-900 transition-colors">
                Recently
              </button>
            </div>

            {/* Menu Items */}
            <div className="space-y-2">
              {/* Overview */}
              <Link
                href="/overview"
                className="flex items-center gap-2 text-gray-900 py-1 hover:bg-gray-100 rounded-md transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-green-400 shrink-0"></div>
                <span className="text-sm font-medium">Overview</span>
              </Link>

              {/* Projects */}
              <Link
                href="/projects"
                className="flex items-center gap-2 text-gray-900 py-1 hover:bg-gray-100 rounded-md transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-green-400 shrink-0"></div>
                <span className="text-sm font-medium">Projects</span>
              </Link>
            </div>
          </div>
        </SidebarGroup>

        {/* Main Menu */}
        <SidebarGroup className="group-data-[collapsible=icon]:mt-2">
          <SidebarGroupLabel className="text-xs text-gray-400 uppercase mb-2 group-data-[collapsible=icon]:hidden">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:gap-4">
              {menuItems.map((item) =>
                item.subItems ? (
                  // Collapsible menu item with subitems
                  <Collapsible
                    key={item.title}
                    defaultOpen={isActiveRoute(item.url, true)}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          tooltip={item.title}
                          className="w-full"
                          isActive={isActiveRoute(item.url, true)}
                        >
                          <item.icon className="!w-4 !h-4" />
                          <span>{item.title}</span>
                          <ChevronRight className="ml-auto !w-4 !h-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.subItems.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={pathname === subItem.url}
                              >
                                <Link
                                  href={subItem.url}
                                  className="flex items-center justify-between"
                                >
                                  <span>{subItem.title}</span>
                                  {subItem.badge && (
                                    <span className="ml-auto  !h-6 inline-flex !w-6 items-center justify-center rounded-full bg-red-500  text-xs font-medium text-white">
                                      {subItem.badge > 9 ? "9+" : subItem.badge}
                                    </span>
                                  )}
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  // Regular menu item without subitems
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      isActive={isActiveRoute(item.url)}
                      className={
                        isActiveRoute(item.url)
                          ? "bg-gray-900 text-white hover:bg-gray-900 hover:text-white"
                          : ""
                      }
                    >
                      <Link href={item.url}>
                        <item.icon className="!w-4 !h-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="bg-white">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> John Doe <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Setting</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default LeftSidebar;
