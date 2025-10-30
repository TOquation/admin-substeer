"use client";

import {
  Bell,
  History,
  LogOut,
  Moon,
  Search,
  Settings,
  Sidebar,
  SlashSquare,
  Sun,
  User,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { SidebarTrigger } from "../ui/sidebar";
import { Input } from "../ui/input";

const Header = () => {
  return (
    <nav className="p-4 flex items-center justify-between sticky top-0 bg-background z-10">
      {/* LEFT */}
      <SidebarTrigger />

      {/* RIGHT */}
      <div className="flex items-center space-x-8">
        <div className="flex rounded-full items-center bg-gray-100 px-2">
          <Search className="text-gray-600 w-4 h-4" />
          <Input
            className="border-0 outline-none ring-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:border-0  rounded-none placeholder:text-gray-400"
            placeholder="Search"
          />
          <SlashSquare className="text-gray-600 w-4 h-4" />
        </div>

        <div className="flex gap-4 items-center">
          <History className="w-4 h-4" />
          <Bell className="w-4 h-4" />
          <SidebarTrigger />
        </div>

        <div className="cursor-pointe flex items-center gap-2 ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm">Andrew Smith</span>
            <span className="text-xs">support</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
