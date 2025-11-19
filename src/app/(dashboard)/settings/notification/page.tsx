import NotificationContent from "@/features/settings/notification/components/notification";
import DynamicHeader from "@/features/settings/shared/dynamic-header";
import React from "react";

const Notification = () => {
  return (
    <div className="h-[calc(100vh-4.5rem)] overflow-hidden gap-3 p-4 flex flex-col">
      <DynamicHeader
        title="Notification Settings"
        subtitle="Manage your email, push, and SMS preferences"
        className=""
      />

      <NotificationContent />
    </div>
  );
};

export default Notification;
