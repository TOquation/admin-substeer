import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import { Bell, MonitorDot } from "lucide-react";
import React, { ComponentType } from "react";

interface NotificationContentProps {
  title: string;
  subtitle: string;
  icon: ComponentType<{ className: string; strokeWidth: number }>;
}

const notifications: NotificationContentProps[] = [
  {
    title: "Log in activities ",
    subtitle: "These are notifications for log in with a new device. ",
    icon: MonitorDot,
  },
  {
    title: "Reminders",
    subtitle: "These are notifications to remind you of updates you",
    icon: Bell,
  },
  {
    title: "Reminders",
    subtitle: "might have missed.",
    icon: Bell,
  },
];

const NotificationContent = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        {notifications.map((notification, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg bg-zinc-50 p-4"
            >
              <div className="flex gap-2 items-start">
                <div>
                  <notification.icon
                    strokeWidth={1.5}
                    className="w-5 h-5 text-slate-500 mt-1"
                  />
                </div>
                <div className="">
                  <h3 className="text-base text-slate-700">
                    {notification.title}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {notification.subtitle}
                  </p>
                </div>
              </div>

              {/* switch */}
              <div className="flex gap-4 items-center">
                <div className="flex items-center space-x-2">
                  <Switch
                    className="data-[state=checked]:bg-emerald-700"
                    id={`notification-switch-${index}-a`}
                  />
                  <Label
                    className="text-slate-800"
                    htmlFor={`notification-switch-${index}-a`}
                  >
                    Push
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    className="data-[state=checked]:bg-emerald-700"
                    id={`notification-switch-${index}-2`}
                  />
                  <Label
                    className="text-slate-800"
                    htmlFor={`notification-switch-${index}-2`}
                  >
                    Email
                  </Label>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationContent;
