import React, { ComponentType } from "react";
import { Sidebar } from "../ui/sidebar";
import { Bug, UserRound } from "lucide-react";
import { Separator } from "../ui/separator";
import Image from "next/image";

interface NotificationProps {
  title: string;
  subtitle: string;
  icon: ComponentType<{ className: string }>;
}

interface HealthProps {
  title: string;
  subtitle: string;
  rate: string;
}

interface ActivitiesProps {
  title: string;
  subtitle: string;
  src: string;
}

const notifications: NotificationProps[] = [
  {
    title: "You fixed a bug",
    subtitle: "Just now",
    icon: Bug,
  },

  {
    title: " New user registered",
    subtitle: "59 minutes ago",
    icon: UserRound,
  },

  {
    title: "You fixed a bug",
    subtitle: "12 hours ago",
    icon: Bug,
  },
];

const health: HealthProps[] = [
  {
    title: "Main API",
    subtitle: "Operational",
    rate: "99%",
  },
  {
    title: "Stripe Integration",
    subtitle: "Operational",
    rate: "99%",
  },
  {
    title: "Authentication service",
    subtitle: "Operational",
    rate: "99%",
  },
  {
    title: "Email services",
    subtitle: "Degraded",
    rate: "99%",
  },
];

const activities: ActivitiesProps[] = [
  {
    title: "Changed the style.",
    subtitle: "Just now",
    src: "/images/activity-1.png",
  },
  {
    title: "Released a new version.",
    subtitle: "59 minutes ago",
    src: "/images/activity-2.png",
  },
  {
    title: "Submitted a bug.",
    subtitle: "12 hours ago",
    src: "/images/activity-3.png",
  },
  {
    title: "Modified A data in Page X.",
    subtitle: "Today, 11:59 AM",
    src: "/images/activity-4.png",
  },
  {
    title: "Deleted a page in Project X.",
    subtitle: "Feb 2, 2025",
    src: "/images/activity-5.png",
  },
];

const RightSidebar = () => {
  return (
    <Sidebar
      className="h-[calc(100vh-1rem)]  overflow-hidden flex flex-col font-fredoka"
      side="right"
    >
      <div className="overflow-y-auto my-scroll-container">
        <div className="p-4  pb-3">
          <h2 className="mb-4">Notification</h2>
          <div className="overflow-y-auto max-h-[calc(33vh-2rem)]">
            {notifications.map((notification, index) => {
              return (
                <div key={index} className="flex gap-2 mb-3">
                  {/* icons */}
                  <div className=" rounded-sm">
                    <div
                      className={`p-1.5  ${
                        index % 2 === 0 ? "bg-green-300" : "bg-emerald-100"
                      } rounded-md`}
                    >
                      <notification.icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* text */}
                  <div>
                    <h3 className="text-black text-sm">{notification.title}</h3>
                    <p className="text-black/40 text-xs">
                      {notification.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="px-4 pb-3 pt-0">
          <h2 className="mb-4">System health Overview</h2>
          <div className="overflow-y-auto max-h-[calc(34vh-2rem)]">
            {health.map((health, index) => {
              return (
                <div
                  key={index}
                  className="justify-between flex items-center mb-3"
                >
                  <div key={index} className="flex gap-2 items-center">
                    {/* icons */}
                    <div
                      className={`rounded-full ${
                        health.title.includes("Email")
                          ? "bg-amber-500"
                          : "bg-emerald-600"
                      } h-3.5 w-3.5 shrink-0`}
                    ></div>

                    {/* text */}
                    <div>
                      <h3 className="text-black text-sm">{health.title}</h3>
                      <p className="text-black/40 text-xs">{health.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm">{health.rate}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="p-4 pt-0 pb-3">
          <h2 className="mb-4">Activities</h2>
          <div className="overflow-y-auto max-h-[calc(33vh-2rem)]">
            {activities.map((activity, index) => {
              return (
                <div key={index} className="flex gap-2 mb-3">
                  {/* icons */}
                  <div className="flex flex-col items-center rounded-sm relative">
                    <div className={`h-6 w-6  rounded-full`}>
                      <Image
                        src={activity.src}
                        alt="activity-img"
                        height={24}
                        width={24}
                        className="rounded-full"
                      />
                    </div>

                    <Separator
                      orientation="vertical"
                      className={`w-2 !h-4 top-3/4  bg-black/10 absolute ${
                        index === activities.length - 1 && "!h-0"
                      } `}
                    />
                  </div>

                  {/* text */}
                  <div>
                    <h3 className="text-black text-sm">{activity.title}</h3>
                    <p className="text-black/40 text-xs">{activity.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default RightSidebar;
