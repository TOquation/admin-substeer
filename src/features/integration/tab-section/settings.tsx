import { Switch } from "@/components/ui/switch";
import { FlaskConical, Home, Repeat, Trash } from "lucide-react";
import React, { ComponentType } from "react";

interface IntegrationSettingsProps {
  id: number;
  title: string;
  subtitle: string;
}

interface ActionProps {
  id: number;
  icon: ComponentType<{ className: string }>;
  text: string;
}

const action: ActionProps[] = [
  {
    id: 1,
    icon: FlaskConical,
    text: "Test Connection",
  },
  {
    id: 2,
    icon: Repeat,
    text: "Forse Sync",
  },
  {
    id: 3,
    icon: Trash,
    text: "Disconnect Integration",
  },
];

const integrationSettings: IntegrationSettingsProps[] = [
  {
    id: 1,
    title: "Enable Webhooks",
    subtitle: "Receive real-time updates via webhooks",
  },
  {
    id: 2,
    title: "Auto Retry",
    subtitle: "Automatically retry failed requests",
  },
  {
    id: 3,
    title: "Rate Limiting",
    subtitle: "Enable rate limiting protection",
  },
  {
    id: 4,
    title: "Detailed Logging",
    subtitle: "Log all API requests and responses",
  },
];

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">Integration Settinga</h3>
        <p className="text-gray-700 font-normal">
          Configure and manage Stripe integration
        </p>
      </div>

      <div className="space-y-6 bg-white p-4 rounded-lg">
        {integrationSettings.map((settings) => {
          return (
            <div
              key={settings.id}
              className="flex justify-between items-center"
            >
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">{settings.title}</h3>
                <p className="text-xs text-gray-600">{settings.subtitle}</p>
              </div>
              <Switch className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-400 cursor-pointer" />
            </div>
          );
        })}
      </div>

      <div className="">
        <h2 className="text-base font-semibold">Actions</h2>
        <div className="space-y-6 p-4">
          {action.map((action) => {
            return (
              <div key={action.id} className="flex items-center gap-4">
                <span>
                  <action.icon
                    className={`w-5 h-5 text-sm  ${
                      action.text === "Disconnect Integration"
                        ? "text-red-600"
                        : "text-gray-900"
                    }`}
                  />
                </span>
                <span
                  className={`text-sm font-semibold  ${
                    action.text === "Disconnect Integration"
                      ? "text-red-600"
                      : "text-gray-900"
                  }`}
                >
                  {action.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Settings;
