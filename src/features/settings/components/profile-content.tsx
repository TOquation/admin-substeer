import React from "react";

// personal data

interface personalDataProps {
  title: string;
  subtitle: string;
}

type jobInfoProps = personalDataProps;
type contactProps = personalDataProps;

const personalData: personalDataProps[] = [
  {
    title: "Full Name",
    subtitle: "Richard Adedeji Obaro",
  },
  {
    title: "Birth date",
    subtitle: "10th May 2000",
  },
  {
    title: "Gender",
    subtitle: "Male",
  },
  {
    title: "Nationality",
    subtitle: "Nigerian",
  },
  {
    title: "Marital Status",
    subtitle: "Single",
  },
  {
    title: "State",
    subtitle: "Ontario",
  },
  {
    title: "City",
    subtitle: "Ottawa",
  },
  {
    title: "Time zone",
    subtitle: "North America/Canada",
  },
];

const jobInfo: jobInfoProps[] = [
  {
    title: "Position",
    subtitle: "Marketer",
  },
  {
    title: "Employee ID",
    subtitle: "Colab12345",
  },
  {
    title: "Work Location",
    subtitle: "Remote",
  },
  {
    title: "Work Email",
    subtitle: "richard@colab.com",
  },
  {
    title: "Start date",
    subtitle: "09th May 2022",
  },
  {
    title: "Salary",
    subtitle: "$2500",
  },
  {
    title: "Job Type",
    subtitle: "Contract ",
  },
];

const contacts: contactProps[] = [
  {
    title: "Email address",
    subtitle: "obaroricheese@gmail.com",
  },
  {
    title: "Phone number",
    subtitle: "+234 7061548319",
  },
  {
    title: "Postal code",
    subtitle: "GHT 07647",
  },
  {
    title: "Address",
    subtitle: "This is your place holder",
  },
];

const ProfileContent = () => {
  return (
    <div className="bg-zinc-50 min-h-screen rounded-xl p-4 flex flex-col pb-4">
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
      {/* job info */}
      <div className="bg-white rounded-xl p-4 flex flex-col pb-4 mt-4">
        <h1 className="font-medium text-neutral-600 mb-2">Job Info</h1>
        <div className="grid gap-3 grid-cols-2">
          {jobInfo.map((job, index) => {
            return (
              <div
                key={index}
                className="col-span-1 px-6 py-2 rounded-lg bg-zinc-50"
              >
                <h3 className="text-neutral-500 text-[0.8rem]">{job.title}</h3>
                <p className="text-neutral-600 font-medium text-[0.95rem]">
                  {job.subtitle}
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
    </div>
  );
};

export default ProfileContent;
