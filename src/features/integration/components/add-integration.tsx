"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

import { ChevronDown, Search } from "lucide-react";
import React, { useState } from "react";

const AddIntegrationForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["Entertainment", "Productivity", "Storage"];

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-4 py-6">
      <h1 className="font-medium">
        Connect a new external service to Substeer
      </h1>
      <div className="py-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6">
          <Input
            className="rounded-full focus-visible:ring-0 shadow-none border-gray-400 py-6 pl-4 w-full sm:w-1/2"
            placeholder="Service name"
          />

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="w-full sm:w-1/2">
              <div className="relative border border-gray-400 rounded-full cursor-pointer">
                <Input
                  className="focus-visible:ring-0 border-none shadow-none py-6 pl-4 pr-12 cursor-pointer"
                  placeholder="Select a Category"
                  value={selectedCategory}
                  readOnly
                />
                <ChevronDown
                  strokeWidth={1.5}
                  className="absolute top-1/2 right-4 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="start"
              className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[200px] py-2"
            >
              <DropdownMenuLabel className="flex items-center gap-1.5 bg-gray-100 h-9 rounded-full px-3 mb-2 mx-1">
                <Search className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <Input
                  className="focus-visible:ring-0 border-none shadow-none bg-transparent min-h-0 h-full px-0 w-full text-sm placeholder:text-gray-500"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </DropdownMenuLabel>
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category) => (
                  <DropdownMenuItem
                    key={category}
                    className="cursor-pointer"
                    onClick={() => {
                      setSelectedCategory(category);
                      setSearchQuery("");
                    }}
                  >
                    {category}
                  </DropdownMenuItem>
                ))
              ) : (
                <div className="px-2 py-2 text-sm text-gray-500 text-center">
                  No results found
                </div>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-col gap-6 pt-6">
          <Input
            className="rounded-full focus-visible:ring-0 shadow-none border-gray-400 py-6 pl-4"
            placeholder="API Key"
          />
          <Input
            className="rounded-full focus-visible:ring-0 shadow-none border-gray-400 py-6 pl-4"
            placeholder="API Secret (Optional)"
          />
          <Input
            className="rounded-full focus-visible:ring-0 shadow-none border-gray-400 py-6 pl-4"
            placeholder="Webhook URL (Optional)"
          />
        </div>
      </div>
    </div>
  );
};

export default AddIntegrationForm;
