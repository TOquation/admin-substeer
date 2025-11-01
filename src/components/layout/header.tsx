"use client";

import {
  Bell,
  History,
  LogOut,
  Moon,
  Search,
  Settings,
  Sidebar,
  PanelLeft,
  PanelRight,
  SlashSquare,
  Sun,
  User,
  Star,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface HeaderProps {
  onToggleLeft: () => void;
  onToggleRight: () => void;
}

const Header = ({ onToggleLeft, onToggleRight }: HeaderProps) => {
  return (
    <nav className="p-4 flex items-center justify-between gap-4 bg-white border-gray-200 border-b sticky top-0  z-10 ">
      <div className="flex items-center gap-3">
        {/* LEFT TRIGGER */}
        <Button
          variant="ghost"
          size="icon"
          className="size-7 shrink-0"
          onClick={onToggleLeft}
        >
          <PanelLeft />
          <span className="sr-only">Toggle Left Sidebar</span>
        </Button>

        <Button variant="ghost" size="icon" className="size-7 shrink-0">
          <Star />
        </Button>

        <h3>Dashboard</h3>
      </div>

      {/* RIGHT SIDE ITEMS */}

      <div className=" items-center gap-6 flex">
        {/* SEARCH BAR - Takes up remaining space */}
        <div className="flex-1 max-w-[16rem] xl:block hidden">
          <div className="flex rounded-full items-center bg-gray-100 px-2">
            <Search className="text-gray-600 w-4 h-4" />
            <Input
              className="border-0 outline-none ring-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:border-0 rounded-none placeholder:text-gray-400"
              placeholder="Search"
            />
            <SlashSquare className="text-gray-600 w-4 h-4" />
          </div>
        </div>

        <div className="flex gap-4 items-center ">
          <History className="w-4 h-4 cursor-pointer hidden xl:block" />
          <Bell className="w-4 h-4 cursor-pointer hidden xl:block" />

          <Button
            variant="ghost"
            size="icon"
            className="size-7 hidden md:block"
            onClick={onToggleRight}
          >
            <PanelRight />
            <span className="sr-only">Toggle Right Sidebar</span>
          </Button>
        </div>

        <div className="cursor-pointer flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="xl:flex flex-col hidden">
            <span className="text-sm">Andrew Smith</span>
            <span className="text-xs">support</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
