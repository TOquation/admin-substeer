import Image from "next/image";
import React from "react";

interface profileSideProps {
  title: string;
  subtitle: string;
}

const userData: profileSideProps[] = [
  {
    title: "Employee ID ",
    subtitle: "Colab12345",
  },
  {
    title: "Role",
    subtitle: "Marketing",
  },
  {
    title: "Gender",
    subtitle: "Male",
  },
  {
    title: "Date of birth",
    subtitle: "10th May 2000",
  },
  {
    title: "Hire date",
    subtitle: "09th May 2022",
  },
  {
    title: "Job Type",
    subtitle: "Contract",
  },
];

const ProfileSide = () => {
  return (
    <div className="bg-zinc-50 rounded-xl p-4 flex flex-col pb-4">
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
