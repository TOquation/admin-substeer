"use client";

import { MoreVertical } from "lucide-react";
import Image from "next/image";
import React from "react";

const market = {
  partners: [
    { label: "spotify", url: "https://cdn.simpleicons.org/spotify" },
    { label: "netflix", url: "https://cdn.simpleicons.org/netflix" },
    { label: "dropbox", url: "https://cdn.simpleicons.org/dropbox" },
  ],
};

const MarketCard = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`${className} flex flex-col relative p-2`}>
      <div className="absolute inset-0 bg-gradient-to-t rounded-xl from-white via-white to-transparent z-10" />

      <div className="relative h-30 w-full overflow-hidden">
        {/* Background image */}
        <div
          style={{ backgroundImage: `url('/marketplace.jpg')` }}
          className="absolute inset-0 bg-cover bg-center rounded-xl"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t rounded-xl  from-white/60 via-white/40 to-transparent" />

        {/* Foreground content */}
        <div className="relative z-10 text-gray-800 flex flex-col p-4 justify-between h-full">
          <div className="flex justify-end pt-1">
            <MoreVertical
              onClick={(e) => e.stopPropagation()}
              className="w-5 h-5 text-gray-700 cursor-pointer"
            />
          </div>

          <div className="pt-2">
            <span className="inline-block text-xs px-2 py-0.5 bg-gray-200/80 rounded-md font-fredoka text-gray-700 font-medium mb-1">
              work
            </span>
            <h4 className="text-sm font-semibold leading-tight font-inter">
              Entertainment
            </h4>
          </div>
        </div>
      </div>

      {/* Info section */}
      <div className="p-3 space-y-2 relative z-20 bg-transparent backdrop-blur-[1px]">
        {/* Price & status */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 font-medium mb-0.5 font-fredoka">
              Price:
            </p>
            <h3 className="text-sm font-semibold text-gray-800 font-inter">
              $4000
            </h3>
          </div>

          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-xs font-medium capitalize font-fredoka">
              Active
            </span>
          </div>
        </div>

        {/* Partners */}
        <div className="flex flex-col gap-3">
          <div className="text-xs text-gray-500 leading-tight">
            <p className="font-normal font-fredoka">Partner/Source:</p>
            <p className="flex items-center gap-1 font-fredoka">
              {market.partners.map((p, index) => (
                <span key={p.label}>
                  {index === market.partners.length - 1
                    ? p.label
                    : `${p.label}, `}
                </span>
              ))}
            </p>
          </div>

          {/* Partner icons */}
          <div className="flex items-center gap-1">
            {market.partners.map((p, index) => (
              <div key={p.label}>
                <Image
                  src={p.url}
                  alt={`logo_${index + 1}`}
                  height={12}
                  width={12}
                  className="rounded-sm object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
