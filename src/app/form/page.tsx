// import React from "react";

// const Form = () => {
//   return (
//     <div className="bg-amber-700 min-h-screen flex justify-center items-center">
//       <div className="bg-white rounded-3xl h-64 max-w-md w-full">
//         <h1></h1>
//       </div>
//     </div>
//   );
// };

// export default Form;
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

const Form = () => {
  const [hide, setHide] = useState(true);

  return (
    <div className="bg-blue-600 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-4xl min-h-64 max-w-md w-full p-4  px-8">
        <h1 className="text-center font-fredoka font-bold text-lg mb-4">
          <span>Welcome back</span>
          <br />
          <span className="mt-6">to substeer admin</span>
        </h1>
        <p className="text-sm text-center font-fahkwang">
          Securely manage users, analytics, and marketplace tools
        </p>

        <div className="mt-4">
          <Input
            className="text-black placeholder:text-gray-400 rounded-full p-4 "
            placeholder="Email"
            type="email"
          />

          <div className="relative">
            <Input
              className="text-black placeholder:text-gray-400 rounded-full p-4 mt-4 "
              placeholder="password"
              type="password"
            />

            {hide ? (
              <Eye
                onClick={() => setHide(false)}
                className="absolute top-1/2 w-5 h-5 -translate-y-1/2 right-4"
              />
            ) : (
              <EyeOff
                onClick={() => setHide(true)}
                className="absolute top-1/2 w-5 h-5 -translate-y-1/2 right-4"
              />
            )}
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 font-normal text-sm text-gray-400 mb-4">
          <label>
            {" "}
            <input type="checkbox" /> Remember me
          </label>
          <div className="text-indigo-600">Forgot password</div>
        </div>

        <button className="bg-green-400 text-center p-3 w-full rounded-full cursor-pointer">
          log in
        </button>
      </div>
    </div>
  );
};

export default Form;
