import React, { ComponentType } from "react";
import { activity } from "../data";
import Image from "next/image";

const ActivityTimeline = () => {
  return (
    <div>
      <h1 className="mb-4">User Activity Timeline</h1>

      <div className="flex flex-col space-y-6">
        {activity.map((activity) => {
          return (
            <div key={activity.bgColor}>
              <div className="flex items-center justify-between">
                {/* right-dot & title */}
                <div className="items-center flex gap-2.5">
                  <div
                    className={`h-2.5 w-2.5 ${activity.bgColor} rounded-full`}
                  ></div>
                  <h3 className="text-[0.9rem] font-medium">
                    {activity.title}
                  </h3>
                </div>
                {/* duration */}
                <p className="text-sm text-gray-400">{activity.duration}</p>
              </div>

              <div className="flex gap-4 items-center px-1">
                <div className="w-[1.5px] h-12 bg-gray-300"></div>
                {activity.src ? (
                  <div className="flex items-center gap-2">
                    <span>
                      <Image
                        alt="img"
                        height={32}
                        width={32}
                        src={activity.src}
                        className={`${
                          activity.src.includes("https")
                            ? "rounded-none"
                            : "rounded-full"
                        }`}
                        unoptimized
                      />
                    </span>

                    <h3 className="text-sm inline-flex flex-col">
                      <span>{activity.subtitleTop}</span>
                      <span className="text-gray-400">
                        {activity.subtitleBottom}
                      </span>
                    </h3>
                  </div>
                ) : (
                  <span className="mt-[-0.5rem] text-gray-400 text-sm">
                    {activity.subtitleBottom}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityTimeline;
