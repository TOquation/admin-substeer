import DynamicHeader from "@/features/settings/shared/dynamic-header";
import ProfileContent from "@/features/settings/components/profile-content";
import ProfileSide from "@/features/settings/components/profile-side";
import React from "react";

const Settings = () => {
  return (
    <div className="h-[calc(100vh-4.5rem)] overflow-hidden gap-3 p-4 flex flex-col">
      <DynamicHeader
        title="Profile Settings"
        subtitle="Manage your profile"
        className=""
      />
      <div className="flex flex-1 gap-3">
        <div className="w-[28%] overflow-y-auto h-[calc(100vh-10rem)]">
          <ProfileSide />
        </div>
        <div className="flex-1 overflow-y-auto  h-[calc(100vh-10rem)]">
          <ProfileContent />
        </div>
      </div>
    </div>
  );
};

export default Settings;
