import React from "react";
import { images } from "../constants";

export const Header = () => {
  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white h-18 border-b-2 border-blue-950 border-opacity-50">
      <header className="container mx-auto py-4 flex items-center lg:justify-around justify-between max-w-9xl lg:px-0 px-4">
        <div className="w-12">
          <img className="w-full" src={images.Logo} alt="" />
        </div>
        <div className="flex justify-end">
          <div className="flex items-center justify-center lg:gap-x-3 gap-x-2">
            <div className="flex flex-col justify-start items-end lg:text-sm text-xs">
              <span className="text-gray-400 ">Handicrafted by</span>
              <span className="text-black">Jim HLS</span>
            </div>
            <div className="">
              <img
                className="lg:w-12 lg:h-12 w-10 h-10 rounded-full"
                src={images.Avatar}
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};
