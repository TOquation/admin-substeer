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
import { ArrowLeft, FileWarning, ImageIcon } from "lucide-react";
import React from "react";

const NewBundle = () => {
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
            fill="black"
          />
          <span className="text-base text-gray-600 font-fredoka tracking-wider">
            video format should be mp4 and not more than 3mb
          </span>
        </div>

        <div className=" my-6 w-full">
          {/* Bundle Name */}
          <Input
            placeholder="Bundlen name:"
            className="rounded-full h-14 px-6 text-base w-1/2 mb-4 placeholder:text-base font-fredoka border-[1.5px] text-gray-500 focus-visible:ring-0 shadow-none border-gray-400"
          />

          {/* Description */}
          <div className="relative">
            <Textarea
              placeholder="Bundle Discription:"
              className="rounded-3xl min-h-[100px] px-6 py-4 resize-none mb-8 text-base focus-visible:ring-0 border-[1.5px] shadow-none placeholder:text-base font-fredoka text-gray-500 border-gray-400"
              maxLength={200}
            />
            <span className="absolute -bottom-6 right-0 text-sm font-fredoka text-gray-500">
              Max: 200
            </span>
          </div>

          {/* Include Products */}
          <Select>
            <SelectTrigger className="shadow-none cursor-pointer mb-4 py-[1.72rem] border-[1.5px] border-gray-400 w-1/2 text-gray-500 font-fredoka text-base rounded-full px-4 flex items-center justify-between">
              <SelectValue placeholder="Include Products" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="product1">Product 1</SelectItem>
              <SelectItem value="product2">Product 2</SelectItem>
              <SelectItem value="product3">Product 3</SelectItem>
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
              <SelectTrigger className="shadow-none cursor-pointer py-[1.72rem] border-gray-400 w-1/2 border-[1.5px] text-gray-500 font-fredoka text-base rounded-full px-4  flex items-center justify-between">
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent className="font-fredoka text-sm text-gray-400">
                <SelectItem value="1month">1 Month</SelectItem>
                <SelectItem value="3months">3 Months</SelectItem>
                <SelectItem value="6months">6 Months</SelectItem>
                <SelectItem value="1year">1 Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBundle;
