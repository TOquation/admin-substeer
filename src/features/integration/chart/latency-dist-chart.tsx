import React from "react";

interface LatencyBucket {
  label: string;
  percentage: number;
  color: string;
}

const LatencyDistribution: React.FC = () => {
  const buckets: LatencyBucket[] = [
    { label: "<100ms", percentage: 45, color: "bg-green-600" },
    { label: "100ms – 200ms", percentage: 60, color: "bg-green-600" },
    { label: "200ms – 300ms", percentage: 15, color: "bg-orange-500" },
    { label: ">300ms", percentage: 5, color: "bg-red-500" },
  ];

  return (
    <div className="">
      <h1 className="mb-2 font-semibold text-base ">Latency Distribution</h1>
      <div className="space-y-4 bg-white w-full p-4 rounded-lg">
        {buckets.map((bucket, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-700 font-medium">
                {bucket.label}
              </span>
              <span className="text-base font-semibold text-gray-900">
                {bucket.percentage}%
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full ${bucket.color} rounded-full transition-all duration-500 ease-out`}
                style={{ width: `${bucket.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatencyDistribution;
