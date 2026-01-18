"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import MarketHeader from "@/features/marketplace/components/marketplace-header";
import { ArrowLeft, FileWarning, ImageIcon, Search } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

// Mock products data - replace with your actual data
const products = [
  { id: "1", name: "Stripe", icon: "https://cdn.simpleicons.org/stripe" },
  { id: "2", name: "Slack", icon: "https://cdn.simpleicons.org/slack" },
  { id: "3", name: "Google", icon: "https://cdn.simpleicons.org/google" },
  { id: "4", name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws" },
  { id: "5", name: "Netflix", icon: "https://cdn.simpleicons.org/netflix" },
  { id: "6", name: "Spotify", icon: "https://cdn.simpleicons.org/spotify" },
  { id: "7", name: "Dropbox", icon: "https://cdn.simpleicons.org/dropbox" },
  { id: "8", name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
];

const NewBundle = () => {
  const [productSearch, setProductSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(productSearch.toLowerCase())
  );

  const handleProductSelect = (productId: string) => {
    setSelectedProduct(productId);
    setProductSearch(""); // Reset search after selection
  };

  return (
    <div className="p-4 h-[calc(100vh-4.5rem)] flex flex-col overflow-hidden">
      <MarketHeader
        title="Add new Bundle"
        breadcrums="Add new Bundle"
        subtitle=""
        Icon={ArrowLeft}
      />

      <div className="mt-6 overflow-y-auto pb-10 pr-2">
        <h3 className="text-base text-gray-700 mb-2 font-fredoka">
          Add product video
        </h3>

        <div className="max-w-sm w-full mb-2">
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex flex-col items-center justify-center gap-2">
              <ImageIcon className="w-6 h-6 text-gray-500" />

              <span className="text-sm font-fredoka text-gray-700">
                Add Bundle Banner
              </span>
            </div>
            <input type="file" accept="video/mp4" className="hidden" />
          </label>
        </div>

        <div className="flex gap-1 items-center">
          <FileWarning
            className="w-4 h-4 mt-0.5 flex-shrink-0 text-white"
            fill="gray"
          />
          <span className="text-base text-gray-600 font-fredoka tracking-wider">
            video format should be mp4 and not more than 3mb
          </span>
        </div>

        <div className="my-6 w-full">
          {/* Bundle Name */}
          <Input
            placeholder="Bundle name:"
            className="rounded-full h-14 px-6 text-base w-1/2 mb-4 placeholder:text-base font-fredoka border-[1.5px] text-gray-500 focus-visible:ring-0 shadow-none border-gray-400"
          />

          {/* Description */}
          <div className="relative">
            <Textarea
              placeholder="Bundle Description:"
              className="rounded-3xl min-h-[100px] px-6 py-4 resize-none mb-8 text-base focus-visible:ring-0 border-[1.5px] shadow-none placeholder:text-base font-fredoka text-gray-500 border-gray-400"
              maxLength={200}
            />
            <span className="absolute -bottom-6 right-0 text-sm font-fredoka text-gray-500">
              Max: 200
            </span>
          </div>

          <Select value={selectedProduct} onValueChange={handleProductSelect}>
            <SelectTrigger className="shadow-none cursor-pointer mb-4 py-[1.72rem] border-[1.5px] border-gray-400 w-1/2 text-gray-500 font-fredoka text-base rounded-full px-4 flex items-center justify-between focus-visible:ring-0">
              <SelectValue placeholder="Include Products" />
            </SelectTrigger>

            <SelectContent className="p-0 bg-white rounded-3xl">
              <div className="sticky top-0 z-10 px-2 pb-2 pt-2 rounded-full bg-white">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search"
                    value={productSearch}
                    onChange={(e) => setProductSearch(e.target.value)}
                    className="pl-9 h-9 text-sm rounded-full bg-neutral-100 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>

              {/* Products List (SCROLLS ONLY) */}
              <div className="max-h-32 overflow-y-auto">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <SelectItem
                      key={product.id}
                      value={product.id}
                      className="cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                          <Image
                            src={product.icon}
                            alt={product.name}
                            width={20}
                            height={20}
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                        <span className="text-sm font-fredoka text-gray-700">
                          {product.name}
                        </span>
                      </div>
                    </SelectItem>
                  ))
                ) : (
                  <div className="px-3 py-4 text-sm text-gray-500 text-center">
                    No products found
                  </div>
                )}
              </div>
            </SelectContent>
          </Select>

          {/* Price + Duration */}
          <div className="flex gap-2">
            <Input
              placeholder="Price"
              type="number"
              className="rounded-full h-14 px-6 text-base w-1/2 placeholder:text-base border-[1.5px] focus-visible:ring-0 shadow-none border-gray-400"
            />

            <Select>
              <SelectTrigger className="shadow-none cursor-pointer py-[1.72rem] border-gray-400 w-1/2 border-[1.5px] text-gray-500 font-fredoka text-base rounded-full px-4 flex items-center justify-between">
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent className="font-fredoka text-sm text-gray-400">
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBundle;
