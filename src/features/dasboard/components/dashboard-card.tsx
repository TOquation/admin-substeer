import React from "react";
import { dashboardCard } from "../data";
import { TrendingDown, TrendingUp } from "lucide-react";

const DashboardCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {dashboardCard.map((cards, index) => {
        const AmountIcon = cards.amountIcon;
        const tone = index % 2 === 0 ? "100" : "200";
        const rateColor = cards.rate.startsWith("-")
          ? "text-red-400"
          : "text-[#018141]";
        return (
          <div
            key={cards.id}
            className={`rounded-xl p-4 space-y-2.5 bg-green-${tone}`}
          >
            <h3>{cards.title}</h3>
            <h1 className="font-bold text-2xl tracking-wide items-center flex">
              {cards.title === "Revenue" ? (
                <AmountIcon className="w-6 h-6" strokeWidth={3} />
              ) : (
                ""
              )}
              {cards.amount.toLocaleString()}
            </h1>
            <div className={`${rateColor} flex gap-2 items-center`}>
              <span>{cards.rate}</span>
              <span className="text-xs">
                {cards.rate.startsWith("-") ? (
                  <TrendingDown className="w-4 h-4" />
                ) : (
                  <TrendingUp className="w-4 h-4" />
                )}
              </span>
              {cards.duration}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardCard;
