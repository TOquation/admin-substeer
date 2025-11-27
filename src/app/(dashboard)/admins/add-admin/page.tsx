"use client";

import AdminInvite from "@/features/admins/add-admins/invitation";
import DynamicHeader from "@/features/admins/shared/dynamic-header";
import { useRouter } from "next/navigation";
import React from "react";

const AddAdmin = () => {
  const router = useRouter();
  return (
    <div className="p-4 h-[calc(100vh-4.5rem)] flex flex-col overflow-hidden">
      <DynamicHeader
        title="Add Admin"
        subtitle="Add admin to work on Substeer"
        showBack
        onBack={() => router.back()}
      />

      <div className="overflow-y-auto">
        <AdminInvite />
      </div>
    </div>
  );
};

export default AddAdmin;
