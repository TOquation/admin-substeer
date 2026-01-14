import Image from "next/image";
import React from "react";
import { userData } from "../data";

const ProfileSide = () => {
  return (
    <div className="bg-zinc-50 min-h-screen rounded-xl p-4 flex flex-col pb-4">
      <div className="flex flex-col items-center">
        <div className="mb-6">
          <Image
            src="/images/pix-1.jpg"
            alt="profile-pix"
            height={96}
            width={180}
            className="object-cover rounded-lg"
          />
          <h3 className="mt-4 text-center text-blue-500 text-xl">
            Richard Obaro
          </h3>
        </div>

        <div className="w-full flex flex-col gap-3">
          {userData.map((info, index) => {
            return (
              <div key={index} className="rounded-lg bg-white p-2">
                <h3 className="text-neutral-500 text-[0.8rem]">{info.title}</h3>
                <p className="text-neutral-600 font-medium text-[0.95rem]">
                  {info.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileSide;
