"use client";

import IntegrationCard from "@/features/integration/components/integration-card";
import IntegrationHeader from "@/features/integration/components/integration-header";
import IntegrationsTable from "@/features/integration/components/integration-table";
import Overview from "@/features/integration/modals/overview";

import { IntegralProps } from "@/features/integration/types";
import React, { useState } from "react";

const Integration = () => {
  const [open, setOpen] = useState(false);
  const [selectedIntegration, setSelectedIntegration] =
    useState<IntegralProps | null>(null);

  return (
    <div className="pb-4 flex flex-col space-y-2 overflow-hidden h-full">
      <div className="shrink-0">
        <IntegrationHeader
          home="Users"
          title="Integrations"
          subtitle="Integration"
        />
      </div>

      <div className="space-y-4 flex-1 pt-4 overflow-y-auto">
        <IntegrationCard />
        <IntegrationsTable
          setSelectedIntegration={setSelectedIntegration}
          setOpen={setOpen}
        />
        <Overview
          selectedIntegration={selectedIntegration}
          open={open}
          setOpen={setOpen}
        />
      </div>
    </div>
  );
};

export default Integration;
