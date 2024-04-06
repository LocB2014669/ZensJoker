import React from "react";
import { images } from "../constants";

export const Header = () => {
  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white h-18 border-b-2 border-blue-950 border-opacity-50">
      <header className="container mx-auto py-4 flex items-center justify-between max-w-4xl">
        <div className="w-12">
          <img className="w-full" src={images.Logo} alt="" />
        </div>
        <div className="flex justify-end">
          <div className="flex items-center justify-center gap-x-3">
            <div className="flex flex-col justify-start items-end">
              <span className="text-gray-400 text-sm">Handicrafted by</span>
              <span className="text-sm text-black">Jim HLS</span>
            </div>
            <div className="">
              <img
                className="w-12 h-12 rounded-full"
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
