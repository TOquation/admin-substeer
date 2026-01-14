import Image from "next/image";
import React from "react";
import { adminData } from "../../data";

interface AdminPanelProps {
  title: string;
  imgSrc: string;
}

const AdminPanel = ({ title, imgSrc }: AdminPanelProps) => {
  return (
    <div>
      <div className="bg-zinc-50  rounded-xl p-4 flex flex-col pb-4">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <Image
              src={imgSrc}
              alt="profile-pix"
              height={96}
              width={180}
              className="object-cover rounded-lg"
            />
            <h3 className="mt-4 text-center text-blue-500 text-xl">{title}</h3>
          </div>

          <div className="w-full flex flex-col gap-3">
            {adminData.map((info, index) => {
              return (
                <div key={index} className="rounded-lg bg-white p-2">
                  <h3 className="text-neutral-500 text-[0.8rem]">
                    {info.title}
                  </h3>
                  <p className="text-neutral-600 font-medium text-[0.95rem]">
                    {info.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
