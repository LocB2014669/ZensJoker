import React from "react";

export const Landing = () => {
  return (
    <section className="w-full">
      <div className="bg-green-500 w-full h-52 flex justify-center items-center">
        <div className="text-white text-center">
          <h1 className="text-3xl font-semibold mb-1">
            A joke a day keeps the doctor away
          </h1>
          <span className="text-xs font-semibold text-white text-opacity-80">If you joke wrong way, your teeth have to pay. (Serious)</span>
        </div>
      </div>
    </section>
  );
};
