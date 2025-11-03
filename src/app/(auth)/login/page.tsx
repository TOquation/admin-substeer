"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Login = () => {
  const [show, setShow] = useState(false);
  const [showBanner, setshowBanner] = useState(false);
  const handleShowPassword = () => {
    setShow(!show);
  };
  return (
    <div>
      {showBanner ? (
        <div className="absolute left-[50%] -translate-x-1/2 top-[10%] space-y-12">
          {/* subster logo */}
          <div className="flex justify-center">
            <Image
              src="/images/logo-text.svg"
              alt="subster-logo"
              width={120}
              height={120}
            />
          </div>

          {/* login-form */}
          <div className="bg-green-50 rounded-[1.5rem] min-h-40 max-w-lg px-8 py-8">
            <div className=" text-center space-y-4 mb-6">
              <h1 className=" font-bold text-lg font-inter">
                <span className="">Welcome back</span> <br />{" "}
                <span>to Substeer Admin</span>
              </h1>
              <p className="text-sm font-roboto font-normal">
                Securely manage users, analytics, and marketplace tools.
              </p>
            </div>

            <form action="">
              <div className="space-y-4">
                <div className="">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="py-5 px-3 rounded-full focus-visible:outline-none  focus-visible:ring-0 focus:ring-0 border border-gray-400 shadow-none"
                  />
                </div>
                <div className="relative">
                  <Input
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    className="py-5 px-3 rounded-full focus:ring-0 focus:outline-none border border-gray-400 focus-visible:ring-0 shadow-none"
                  />

                  {show ? (
                    <Eye
                      onClick={() => handleShowPassword()}
                      className="absolute top-1/2 -translate-y-1/2 right-3 w-5 h-5"
                      strokeWidth={1}
                    />
                  ) : (
                    <EyeOff
                      onClick={() => handleShowPassword()}
                      className="absolute top-1/2 -translate-y-1/2 right-3 w-5 h-5"
                      strokeWidth={1}
                    />
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <label className="flex gap-1.5 items-center text-sm">
                    <span>
                      <Checkbox className="w-4 h-4 rounded-none border border-gray-400 data-[state=checked]:border-green-200 data-[state=checked]:bg-green-400 cursor-pointer hover:border-green-400" />
                    </span>
                    <span>Remember me</span>
                  </label>

                  <button className="text-sm cursor-pointer text-indigo-700">
                    Forgot password?
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <div className="fixed top-0 w-full bg-[url('/images/banner.svg')] bg-cover bg-no-repeat bg-center h-20 flex justify-center items-center">
            <h1 className="text-white text-2xl font-fredoka ">
              Lets get you started!
            </h1>
          </div>
          <div className="absolute left-[50%] -translate-x-1/2 top-[20%] space-y-12">
            {/* subster logo */}
            <div className="flex justify-center">
              <Image
                src="/images/logo-text.svg"
                alt="subster-logo"
                width={120}
                height={120}
              />
            </div>

            {/* login-form */}
            <div className="bg-green-50 rounded-[1.5rem] min-h-40 max-w-lg px-8 py-8">
              <div className=" text-center space-y-4 mb-6">
                <h1 className=" font-bold text-lg font-inter">
                  <span className="">Welcome back</span> <br />{" "}
                  <span>to Substeer Admin</span>
                </h1>
                <p className="text-sm font-roboto font-normal">
                  Securely manage users, analytics, and marketplace tools.
                </p>
              </div>

              <form action="">
                <div className="space-y-4">
                  <div className="">
                    <Input
                      type="email"
                      placeholder="Email"
                      className="py-5 px-3 rounded-full focus-visible:outline-none  focus-visible:ring-0 focus:ring-0 border border-gray-400 shadow-none"
                    />
                  </div>
                  <div className="relative">
                    <Input
                      type={show ? "text" : "password"}
                      placeholder="Password"
                      className="py-5 px-3 rounded-full focus:ring-0 focus:outline-none border border-gray-400 focus-visible:ring-0 shadow-none"
                    />

                    {show ? (
                      <Eye
                        onClick={() => handleShowPassword()}
                        className="absolute top-1/2 -translate-y-1/2 right-3 w-5 h-5"
                        strokeWidth={1}
                      />
                    ) : (
                      <EyeOff
                        onClick={() => handleShowPassword()}
                        className="absolute top-1/2 -translate-y-1/2 right-3 w-5 h-5"
                        strokeWidth={1}
                      />
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <label className="flex gap-1.5 items-center text-sm">
                      <span>
                        <Checkbox className="w-4 h-4 rounded-none border border-gray-400 data-[state=checked]:border-green-200 data-[state=checked]:bg-green-400 cursor-pointer hover:border-green-400" />
                      </span>
                      <span>Remember me</span>
                    </label>

                    <button className="text-sm cursor-pointer text-indigo-700">
                      Forgot password?
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
