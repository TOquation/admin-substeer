import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DynamicHeader from "@/features/settings/shared/dynamic-header";
import { Lock } from "lucide-react";
import React from "react";

const Security = () => {
  return (
    <div className="h-[calc(100vh-4.5rem)] overflow-hidden gap-3 p-4 flex flex-col">
      <DynamicHeader
        title="Security Settings "
        subtitle="Manage your security preferences to protect your account "
        className=""
      />

      <div className="bg-zinc-50 rounded-lg p-6  h-[calc(100vh-10rem)]">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-3">
            <Lock className="h-5 w-5" />
            <div>
              <h3 className="text-slate-700 text-sm ">Update Password</h3>
              <p className="text-xs text-slate-500">
                These are notifications for log in with a new device.{" "}
              </p>
            </div>
          </div>
          <Button
            className="px-4 py-2 rounded-xl text-green-400 cursor-pointer"
            size="lg"
          >
            save changes
          </Button>
        </div>
        <div className=" mt-4 ml-6">
          <Input
            placeholder="Old password"
            className="rounded-full h-[3.3rem] px-6 text-sm w-1/2 mb-4 placeholder:text-base font-fredoka border-[1.5px] text-gray-500 focus-visible:ring-0 shadow-none border-gray-400"
            type="password"
          />
          <Input
            placeholder="New password"
            className="rounded-full h-[3.3rem] px-6 text-sm w-1/2 mb-4 placeholder:text-base font-fredoka border-[1.5px] text-gray-500 focus-visible:ring-0 shadow-none border-gray-400"
            type="password"
          />
          <Input
            placeholder="Confirm new password"
            className="rounded-full h-[3.3rem] px-6 text-sm w-1/2 mb-4 placeholder:text-base font-fredoka border-[1.5px] text-gray-500 focus-visible:ring-0 shadow-none border-gray-400"
            type="password"
          />
        </div>
      </div>
    </div>
  );
};

export default Security;
