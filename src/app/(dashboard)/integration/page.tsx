"use client";

import IntegrationCard from "@/features/integration/components/integration-card";
import IntegrationHeader from "@/features/integration/components/integration-header";
import IntegrationsTable from "@/features/integration/components/integration-table";
import Overview from "@/features/integration/modals/overview";
import React, { useState } from "react";

const Integration = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="pb-8 space-y-2 ">
      <IntegrationHeader title="Integrations" subtitle="Integration" />
      <div className="space-y-4 pt-[5rem]">
        <IntegrationCard />
        <IntegrationsTable setOpen={setOpen} />
        <Overview open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Integration;
