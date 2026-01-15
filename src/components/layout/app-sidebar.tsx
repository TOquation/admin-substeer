"use client";

import {
  Users,
  Puzzle,
  Store,
  Headphones,
  BarChart3,
  Code2,
  UserCog,
  ChevronRight,
  Settings,
  LayoutGrid,
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
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutGrid,
  },
  {
    title: "Users",
    url: "/user",
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
    icon: Headphones,
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
      { title: "All Admins", url: "/admins/all-admins" },
      { title: "Roles", url: "/admins/roles" },
      { title: "Review", url: "/admins/reviews", badge: 9 },
    ],
  },
];

const settingsItems = {
  title: "Settings",
  url: "/settings",
  icon: Settings,
  subItems: [
    { title: "Profile", url: "/settings/profile" },
    { title: "Notification", url: "/settings/notification" },
    { title: "Security", url: "/settings/security" },
  ],
};

const LeftSidebar = () => {
  const pathname = usePathname();

  //if a route is active
  const isActiveRoute = (url: string, hasSubItems?: boolean) => {
    if (url === "/") {
      return pathname === "/";
    }
    // For all routes (with or without subitems), check if pathname starts with the url
    return pathname.startsWith(url);
  };

  //if submenu item is active (including sub-pages)
  const isSubMenuActive = (url: string) => {
    return pathname.startsWith(url);
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
              <div className="flex items-center gap-2 text-black py-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-300 shrink-0"></div>
                <span className="text-sm">Marketplace</span>
              </div>

              {/* Projects */}
              <div className="flex items-center gap-2 text-black py-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-300 shrink-0"></div>
                <span className="text-sm">Admins</span>
              </div>
            </div>
          </div>
        </SidebarGroup>

        {/* Main Menu */}
        <SidebarGroup className="group-data-[collapsible=icon]:mt-2">
          <SidebarGroupLabel className="text-xs text-black/40 uppercase mb-2 group-data-[collapsible=icon]:hidden">
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
                    <SidebarMenuItem className="">
                      <CollapsibleTrigger className="" asChild>
                        <SidebarMenuButton
                          tooltip={item.title}
                          className="w-full hover:bg-transparent data-[state=open]:bg-green-50 data-[state=open]:text-black group-data-[collapsible=icon]:data-[state=open]:bg-transparent"
                          isActive={isActiveRoute(item.url, true)}
                        >
                          <ChevronRight className="!w-4 !h-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                          <item.icon className="!w-4 !h-4" />
                          <span>{item.title}</span>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="ml-8">
                          {item.subItems.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={isSubMenuActive(subItem.url)}
                                className="data-[active=true]:bg-neutral-800 data-[active=true]:text-green-400"
                              >
                                <Link
                                  href={subItem.url}
                                  className="flex items-center justify-between"
                                >
                                  <span>{subItem.title}</span>
                                  {subItem.badge && (
                                    <span className="ml-auto !h-5 inline-flex !w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
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
                      className="hover:bg-transparent data-[active=true]:bg-neutral-800 data-[active=true]:text-green-400"
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
            <Collapsible
              defaultOpen={isActiveRoute(settingsItems.url, true)}
              className="group/collapsible"
            >
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  tooltip={settingsItems.title}
                  className="w-full"
                  isActive={isActiveRoute(settingsItems.url, true)}
                >
                  <ChevronRight className="!w-4 !h-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  <settingsItems.icon className="!w-4 !h-4" />
                  <span>{settingsItems.title}</span>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="ml-8">
                  {settingsItems.subItems.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        asChild
                        isActive={isSubMenuActive(subItem.url)}
                        className="data-[active=true]:bg-neutral-800 data-[active=true]:text-green-400"
                      >
                        <Link href={subItem.url}>
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </Collapsible>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default LeftSidebar;
