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

import { Input } from "@/components/ui/input";
import React from "react";

const Form = () => {
  return (
    <div className="bg-blue-600 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-4xl h-64 max-w-md w-full p-4  px-8">
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
          <Input
            className="text-black placeholder:text-gray-400 rounded-full p-4 mt-4 "
            placeholder="password"
            type="password"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
