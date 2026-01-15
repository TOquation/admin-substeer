"use client";

import { Button } from "@/components/ui/button";
import { reviewCard } from "@/features/admins/data";
import DynamicHeader from "@/features/admins/shared/dynamic-header";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Reviews = () => {
  const router = useRouter();
  return (
    <div className="p-4 h-[calc(100vh-4.5rem)] flex flex-col overflow-hidden">
      <DynamicHeader
        title="Review"
        subtitle="Manage invited admins"
        showFilter
        showExport
        actionLabel="Add Admin"
      />

      <div className="mt-1 pb-6 overflow-y-auto">
        <div className="overflow-x-auto">
          <div className="min-w-fit space-y-3">
            <div className="flex mt-8 px-4 text-sm text-neutral-400">
              <div className="w-[280px] lg:w-[33%] text-sm">NAME</div>
              <div className="w-[280px] lg:w-[33%] text-sm">EMAIL</div>
              <div className="w-[160px] lg:w-[24%] text-sm whitespace-nowrap">
                SUBMITTED ON
              </div>
              <div className="w-[80px] lg:w-[10%] text-sm"></div>
            </div>

            {reviewCard.map((card) => (
              <div
                key={card.id}
                className="flex items-center bg-neutral-100 py-4 px-4 rounded-sm"
              >
                {/* img + name */}
                <div className="flex items-center gap-3 w-[280px] min-w-[280px] lg:min-w-0 lg:w-[33%]">
                  <Image
                    src={card.imgSrc}
                    alt="admin-pix"
                    width={32}
                    height={32}
                    className="rounded-full object-cover flex-shrink-0"
                  />
                  <p className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                    {card.name}
                  </p>
                </div>

                {/* email */}
                <div className="w-[280px] min-w-[280px] lg:min-w-0 lg:w-[33%]">
                  <p className="text-sm whitespace-nowrap overflow-hidden text-ellipsis text-cyan-600">
                    {card.email}
                  </p>
                </div>

                {/* submitted on */}
                <div className="w-[160px] min-w-[160px] lg:min-w-0 lg:w-[24%]">
                  <p className="text-sm whitespace-nowrap text-neutral-500">
                    {card.submittedOn}
                  </p>
                </div>

                <div className="w-[80px] min-w-[80px] lg:min-w-0 lg:w-[10%] flex justify-end">
                  <Button
                    onClick={() => router.push(`/admins/reviews/${card.id}`)}
                    className="rounded-full text-xs h-7.5 px-3 cursor-pointer text-green-400"
                  >
                    view profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
