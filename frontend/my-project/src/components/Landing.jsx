import React from "react";

export const Landing = () => {
  return (
    <section className="w-full">
      <div className="bg-green-500 w-full h-52 flex justify-center items-center">
        <div className="text-white text-center">
          <h1 className="lg:text-3xl text-lg font-semibold lg:mb-1 mb-3">
            A joke a day keeps the doctor away
          </h1>
          <span className="text-xs font-semibold text-white text-opacity-80">If you joke wrong way, your teeth have to pay. (Serious)</span>
        </div>
      </div>
    </section>
  );
};
