import React from "react";

export const Footer = () => {
  return (
    <section className="border-t border-gray-300">
      <footer className="mx-auto py-7">
        <div className="flex flex-col gap-y-5 items-center justify-center">
          <div className="leading-7 text-gray-400 text-center text-sm flex flex-col items-center">
            <p className="max-w-3xl">
              This website is created as part of Hlsolutions program. The
              materials contained on this website are provided for general
            </p>
            <p className="max-w-5xl">
              information only and do not constitute any form of advice. HLS
              assumes no responsibility for the accuracy of any particular
              statement and
            </p>
            <p className="max-w-3xl">
              accepts no liability for any loss or damage which may arise from
              reliance on the information contained on this site.
            </p>
          </div>
          <span className="text-gray-500">Copyright 2021 HLS</span>
        </div>
      </footer>
    </section>
  );
};
