import DynamicHeader from "@/features/settings/shared/dynamic-header";
import React from "react";

const Security = () => {
  return (
    <div className="h-[calc(100vh-4.5rem)] overflow-hidden gap-3 p-4 flex flex-col">
      <DynamicHeader
        title="Update Password"
        subtitle="These are notifications for log in with a new device. "
        className=""
        isIcon
      />
    </div>
  );
};

export default Security;
