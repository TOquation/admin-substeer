import AddIntegrationForm from "@/features/integration/components/add-integration";
import IntegrationHeader from "@/features/integration/components/integration-header";
import React from "react";

const AddIntegration = () => {
  return (
    <div>
      <div className="shrink-0">
        <IntegrationHeader
          title="Add integrations"
          subtitle="Integration"
          subtitle_2="Add Integration"
        />
      </div>

      <AddIntegrationForm />
    </div>
  );
};

export default AddIntegration;
