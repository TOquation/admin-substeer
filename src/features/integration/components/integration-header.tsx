"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { ArrowLeft, Plus, SlashIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const IntegrationHeader: React.FC<{
  home?: string;
  title?: string;
  subtitle?: string;
  subtitle_2?: string;
}> = ({ home, title, subtitle, subtitle_2 }) => {
  const router = useRouter();
  const handleAddIntegration = () => {
    if (subtitle_2) {
      router.push("/integration");
    } else {
      router.push("/integration/add-integration");
    }
  };
  const handleBack = () => {
    router.back();
  };
  return (
    <div className={cn("flex  bg-white items-center gap-3")}>
      <div className="flex justify-between items-center w-full pt-4 px-4">
        {subtitle_2 ? (
          <div className="flex items-center gap-2">
            <div
              onClick={handleBack}
              className="bg-gray-100 p-1.5 border-gray-900 rounded-full border cursor-pointer"
            >
              <ArrowLeft className="w-6 h-6" />
            </div>
            <div className="flex-shrink-0 pb-0">
              <h1 className="text-base font-medium">{title}</h1>
              <Breadcrumb>
                <BreadcrumbList>
                  {home ? (
                    <>
                      <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                          <Link
                            href="/user/free"
                            className="text-gray-500 hover:text-[#2100FF] transition-colors"
                          >
                            {home}
                          </Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>
                        <SlashIcon className="text-gray-400 w-3 h-3" />
                      </BreadcrumbSeparator>
                    </>
                  ) : (
                    <>
                      <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                          <Link
                            href="/integration"
                            className="text-gray-500 hover:text-[#2100FF] transition-colors"
                          >
                            {subtitle}
                          </Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                    </>
                  )}

                  {subtitle_2 ? (
                    <>
                      <BreadcrumbItem></BreadcrumbItem>
                      <BreadcrumbSeparator>
                        <SlashIcon className="text-gray-400 w-3 h-3" />
                      </BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbPage className="text-[#2100FF] font-medium">
                          {subtitle_2}
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    </>
                  ) : (
                    <div>
                      <BreadcrumbItem>
                        <BreadcrumbPage className="text-[#2100FF] font-medium">
                          {subtitle}
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                      <BreadcrumbItem>
                        <BreadcrumbPage className="text-[#2100FF] font-medium">
                          {subtitle_2}
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    </div>
                  )}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        ) : (
          <div className="flex-shrink-0  pb-0">
            <h1 className="text-base font-medium">{title}</h1>
            <Breadcrumb>
              <BreadcrumbList>
                {home ? (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link
                          href="/user/free"
                          className="text-gray-500 hover:text-[#2100FF] transition-colors"
                        >
                          {home}
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <SlashIcon className="text-gray-400 w-3 h-3" />
                    </BreadcrumbSeparator>
                  </>
                ) : (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link
                          href="/integration"
                          className="text-gray-500 hover:text-[#2100FF] transition-colors"
                        >
                          {subtitle}
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </>
                )}

                {subtitle_2 ? (
                  <>
                    <BreadcrumbItem></BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <SlashIcon className="text-gray-400 w-3 h-3" />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-[#2100FF] font-medium">
                        {subtitle_2}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                ) : (
                  <div>
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-[#2100FF] font-medium">
                        {subtitle}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-[#2100FF] font-medium">
                        {subtitle_2}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </div>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        )}

        <div
          onClick={handleAddIntegration}
          className="flex items-center gap-1 cursor-pointer sm:py-2 sm:px-4 py-2 px-2 rounded-full hover:bg-[#04FB43] hover:text-black transition text-[#04FB43] bg-black"
        >
          {subtitle_2 ? (
            <div className="flex items-center gap-2">
              <span>
                <Plus className="w-5 h-5" />
              </span>
              <span className="text-[0.9rem] hidden sm:block">
                Add Integration
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span>
                <Plus className="w-5 h-5" />
              </span>
              <span className="text-[0.9rem] hidden sm:block">
                Add Integration
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntegrationHeader;
