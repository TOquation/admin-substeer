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
    url: "/",
    icon: Home,
    isActive: true,
  },
  {
    title: "Users",
    url: "#",
    icon: Users,
    subItems: [
      { title: "Free Users", url: "#" },
      { title: "Subscribers", url: "#" },
      { title: "Active", url: "#" },
      { title: "Inactive", url: "#" },
    ],
  },
  {
    title: "Integration",
    url: "#",
    icon: Puzzle,
  },
  {
    title: "Marketplace",
    url: "#",
    icon: Store,
  },
  {
    title: "Support",
    url: "#",
    icon: HeadphonesIcon,
    subItems: [
      { title: "New Ticket", url: "#", badge: 99 },
      { title: "Sales", url: "#", badge: 9 },
      { title: "Security", url: "#", badge: 9 },
      { title: "Flagged", url: "#", badge: 9 },
    ],
  },
  {
    title: "Analytics",
    url: "#",
    icon: BarChart3,
  },
  {
    title: "Developer tools",
    url: "#",
    icon: Code2,
  },
  {
    title: "Admins",
    url: "#",
    icon: UserCog,
    subItems: [
      { title: "All Admins", url: "#" },
      { title: "Roles", url: "#" },
      { title: "Review", url: "#", badge: 9 },
    ],
  },
];

const LeftSidebar = () => {
  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="border-b border-gray-200">
        <SidebarMenu>
          {/* Logo - Always visible */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="lg" className="h-auto py-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo-main.svg"
                  alt="logo"
                  width={34}
                  height={34}
                  className="group-data-[collapsible=icon]:w-8 group-data-[collapsible=icon]:h-8 transition-all"
                />
                <h3 className="font-bold text-2xl">
                  Sub<span className="font-medium">steer</span>
                </h3>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {/* Favorites Section - Hidden when collapsed */}
        <SidebarGroup>
          <div className="px-4 pt-4  group-data-[collapsible=icon]:hidden">
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
                href="#"
                className="flex items-center gap-2 text-gray-900 py-1 hover:bg-gray-100 rounded-md transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-green-400 shrink-0"></div>
                <span className="text-sm font-medium">Overview</span>
              </Link>

              {/* Projects */}
              <Link
                href="#"
                className="flex items-center gap-2 text-gray-900 py-1 hover:bg-gray-100 rounded-md transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-green-400 shrink-0"></div>
                <span className="text-sm font-medium">Projects</span>
              </Link>
            </div>
          </div>
        </SidebarGroup>

        {/* Main Menu */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs text-gray-400 uppercase mb-2 group-data-[collapsible=icon]:hidden">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) =>
                item.subItems ? (
                  // Collapsible menu item with subitems
                  <Collapsible
                    key={item.title}
                    defaultOpen={false}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          tooltip={item.title}
                          className="w-full"
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
                              <SidebarMenuSubButton asChild>
                                <Link
                                  href={subItem.url}
                                  className="flex items-center justify-between"
                                >
                                  <span>{subItem.title}</span>
                                  {subItem.badge && (
                                    <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-xs font-medium text-white">
                                      {subItem.badge > 99
                                        ? "99+"
                                        : subItem.badge}
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
                      isActive={item.isActive}
                      className={
                        item.isActive
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

      <SidebarFooter>
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
