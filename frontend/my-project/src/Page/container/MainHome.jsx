import React from "react";

export const MainHome = () => {
  return (
    <div className="my-5 mx-auto px-12 max-w-4xl">
      <p className="leading-7 my-10 text-black text-opacity-60">
        A child asked his father, "How were people born?" So his father said,
        "Adam and Eve made babies, then their babies became adults and made
        babies, and so on." The child then went to his mother, asked her the
        same question and she told him, "We were monkeys then we evolved to
        become like we are now." The child ran back to his father and said, "You
        lied to me!" His father replied, "No, your mom was talking about her
        side of the family."
      </p>
      <hr className="w-3/4 mx-auto" />
      <div className="text-white flex justify-center gap-x-5 items-center py-14">
        <div>
          <button className="py-3 bg-blue-500 w-52">This is Funny!</button>
          <div className="px-10 h-1 bg-blue-600 "></div>
        </div>
        <div>
          <button className="py-3 bg-green-500 w-52">
            This not is funny.
          </button>
          <div className="px-10 h-1 bg-green-600 "></div>
        </div>
      </div>
    </div>
  );
};
