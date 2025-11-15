import Image from "next/image";
import React from "react";

const Poster = () => {
  return (
    <div className="text-sm p-2 py-16 grid place-content-center space-y-6">
      <div>
        <Image
          src="/support-banner.svg"
          alt="banner"
          height={180}
          width={180}
        />
      </div>

      <div className="text-center font-fredoka relative">
        <h2 className="font-medium text-xl">Hey Elita!</h2>
        <p className="text-sm">Time to help the people who need us most</p>

        <div className="flex gap-2 items-center absolute -left-6 top-20">
          <Image src="/line-curve.svg" alt="curve" height={42} width={42} />
          <Image src="/conversat.svg" alt="text" height={200} width={200} />
        </div>
      </div>
    </div>
  );
};

export default Poster;
