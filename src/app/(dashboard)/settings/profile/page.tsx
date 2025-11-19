import DynamicHeader from "@/features/settings/dynamic-header";
import ProfileContent from "@/features/settings/profile-content";
import ProfileSide from "@/features/settings/profile-side";
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
        <div className="w-[28%] overflow-y-auto h-[calc(85vh-4rem)]">
          <ProfileSide />
        </div>
        <div className="flex-1 overflow-y-auto  h-[calc(85vh-4rem)]">
          <ProfileContent />
        </div>
      </div>
    </div>
  );
};

export default Settings;
