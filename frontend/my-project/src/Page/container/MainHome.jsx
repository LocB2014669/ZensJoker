import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import jokesData from "../../../data/jokesData";

export const MainHome = () => {
  const [jokes, setJokes] = useState([]);
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);

  useEffect(() => {
    const votedJokes = [];
    for (let i = 0; i < jokesData.length; i++) {
      const checkJoke = jokesData[i];
      if (!Cookies.get(`Funny${i}`) && !Cookies.get(`NotFunny${i}`)) {
        votedJokes.push(checkJoke.text);
      }
    }
    setJokes(votedJokes);
    setCurrentJokeIndex(0);
  }, []);

  const handleVote = (voteType) => {
    if (currentJokeIndex < jokes.length) {
      setCurrentJokeIndex(currentJokeIndex + 1);
      const currentJokeIndexFromData = jokesData.findIndex(
        (item) => item.text === jokes[currentJokeIndex]
      );
      Cookies.set(`${voteType}${currentJokeIndexFromData}`, true, {
        expires: 1,
      });
      toast.success("Bình Chọn Thành Công");
    } else {
      toast.error("Đã hết truyện, quay lại vào ngày mai");
    }
  };
  return (
    <div className="my-5 mx-auto lg:px-[51px] px-5 max-w-4xl ">
      {currentJokeIndex < jokes.length ? (
        <div className="lg:mt-10 lg:mb-10 mt-10 mb-28">
          {jokes[currentJokeIndex].split("\n").map((line, index) => (
            <p
              key={index}
              className="lg:leading-7 lg:test-base text-sm  text-black text-opacity-70"
            >
              {line}
            </p>
          ))}
        </div>
      ) : (
        <p className="leading-7 my-10 text-black text-opacity-60">
          That's all the jokes for today! Come back another day!
        </p>
      )}
      <hr className="w-3/4 mx-auto lg:block hidden" />
      <div className="text-white flex justify-center gap-x-5 items-center py-14">
        <div>
          <button
            className="bg-blue-500 lg:px-10 lg:py-3 px-5 py-1.5 lg:w-52 w-36 text-nowrap lg:text-lg text-sm "
            // disabled={currentJokeIndex === jokes.length}
            onClick={() => handleVote("Funny")}
          >
            This is Funny!
          </button>
          <div className="px-10 h-1 bg-blue-600 "></div>
        </div>
        <div>
          <button
            className="bg-green-500 lg:px-10 lg:py-3 px-5 py-1.5 lg:w-52 w-36 text-nowrap lg:text-lg text-sm "
            // disabled={currentJokeIndex === jokes.length}
            onClick={() => handleVote("NotFunny")}
          >
            This not is funny.
          </button>
          <div className="px-10 h-1 bg-green-600"></div>
        </div>
      </div>
    </div>
  );
};
