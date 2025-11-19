import React from "react";
interface headerTitle {
  title: string;
  subtitle: string;
  className: string;
}

const DynamicHeader = ({ title, subtitle, className }: headerTitle) => {
  return (
    <div className={`${className}`}>
      <h3 className="text-base font-medium">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
};

export default DynamicHeader;
