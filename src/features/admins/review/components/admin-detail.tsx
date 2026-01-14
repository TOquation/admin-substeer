import React from "react";
import {
  contacts,
  emergencyContactInfo,
  jobInfo,
  personalData,
} from "../../data";
import { Button } from "@/components/ui/button";

const AdminDeatails = ({ view }: { view: string }) => {
  return (
    <div className=" flex flex-col pb-4">
      {view === "Personal data" && (
        <div>
          {/* personal data */}
          <div className="bg-white p-4 rounded-xl">
            <h1 className="font-medium text-neutral-600 mb-2">Personal Data</h1>
            <div className="grid gap-3 grid-cols-2">
              {personalData.map((personal, index) => {
                return (
                  <div
                    key={index}
                    className={`px-6 py-2 rounded-lg bg-zinc-50 w-full ${
                      index === 0 ? "col-span-2" : "col-span-1"
                    }`}
                  >
                    <h3 className="text-neutral-500 text-[0.8rem]">
                      {personal.title}
                    </h3>
                    <p className="text-neutral-600 font-medium text-[0.95rem]">
                      {personal.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* contact data */}
          <div className="bg-white rounded-xl p-4 flex flex-col pb-4 mt-4">
            <h1 className="font-medium text-neutral-600 mb-2">Contact Data</h1>
            <div className="grid gap-3 grid-cols-2 w-full">
              {contacts.map((contact, index) => {
                return (
                  <div
                    key={index}
                    className="col-span-1 px-6 py-2 rounded-lg bg-zinc-50"
                  >
                    <h3 className="text-neutral-500 text-[0.8rem]">
                      {contact.title}
                    </h3>
                    <p className="text-neutral-600 font-medium text-[0.95rem]">
                      {contact.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* emergency contact info */}
          <div className="bg-white p-4 rounded-xl mt-4">
            <h1 className="font-medium text-neutral-600 mb-2">
              Emergency Contact info
            </h1>
            <div className="grid gap-3 grid-cols-2">
              {emergencyContactInfo.map((emergency, index) => {
                return (
                  <div
                    key={index}
                    className={`px-6 py-2 rounded-lg bg-zinc-50 w-full ${
                      index === 0 || index === 1 ? "col-span-2" : "col-span-1"
                    }`}
                  >
                    <h3 className="text-neutral-500 text-[0.8rem]">
                      {emergency.title}
                    </h3>
                    <p className="text-neutral-600 font-medium text-[0.95rem]">
                      {emergency.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* cta */}
          <div className="flex items-center gap-3 mt-8 justify-end">
            <Button className="cursor-pointer text-xs bg-red-600">
              Decline
            </Button>
            <Button className="cursor-pointer text-xs bg-green-600">
              Approve Profile
            </Button>
          </div>
        </div>
      )}

      {view === "Job Information" && (
        <div className="bg-white rounded-xl p-4 flex flex-col pb-4">
          {/* job info */}
          <h1 className="font-medium text-neutral-600 mb-2">Job Info</h1>
          <div className="grid gap-3 grid-cols-2">
            {jobInfo.map((job, index) => {
              return (
                <div
                  key={index}
                  className="col-span-1 px-6 py-2 rounded-lg bg-zinc-50"
                >
                  <h3 className="text-neutral-500 text-[0.8rem]">
                    {job.title}
                  </h3>
                  <p className="text-neutral-600 font-medium text-[0.95rem]">
                    {job.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
          {/* cta */}
          <div className="flex items-center gap-3 mt-8 justify-end">
            <Button className="cursor-pointer text-xs bg-red-600">
              Decline
            </Button>
            <Button className="cursor-pointer text-xs bg-green-600">
              Approve Profile
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDeatails;
