import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
const jokesData = [
  `A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."`,
  `Teacher: "Kids,what does the chicken give you?" 
  Student: "Meat!" 
  Teacher: "Very good! Now what does the pig give you?" 
  Student: "Bacon!" 
  Teacher: "Great! And what does the fat cow give you?" 
  Student: "Homework!"`,
  `The teacher asked Jimmy, "Why is your cat at school today Jimmy?" 
  Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'"`,
  `A housewife, an accountant and a lawyer were asked "How much is 2+2?" 
  The housewife replies: "Four!". 
  The accountant says: "I think it's either 3 or 4. 
  Let me run those figures through my spreadsheet one more time." 
  The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"`,
];

export const MainHome = () => {
  const [jokes, setJokes] = useState(jokesData);
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);

  useEffect(() => {
    const votedJokes = [];
    for (let i = 0; i < jokesData.length; i++) {
      if (!Cookies.get("Funny") && !Cookies.get("NotFunny")) {
        votedJokes.push(jokesData[i]);
      }
    }
    setJokes(votedJokes);
    setCurrentJokeIndex(0);
  }, []);

  const handleVote = (voteType) => {
    if (currentJokeIndex < jokes.length) {
      setCurrentJokeIndex(currentJokeIndex + 1);
      Cookies.set(voteType, currentJokeIndex, { expires: 1 });
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
            className="bg-blue-500 lg:px-10 lg:py-3 px-5 py-1.5  lg:w-52 w-36  text-nowrap lg:text-lg text-sm "
            // disabled={currentJokeIndex === jokes.length}
            onClick={() => handleVote("Funny")}
          >
            This is Funny!
          </button>
          <div className="px-10 h-1 bg-blue-600 "></div>
        </div>
        <div>
          <button
            className="bg-green-500 lg:px-10 lg:py-3 px-5 py-1.5  lg:w-52 w-36  text-nowrap lg:text-lg text-sm "
            // disabled={currentJokeIndex === jokes.length}
            onClick={() => handleVote("NotFunny")}
          >
            This not is funny.
          </button>
          <div className="px-10 h-1 bg-green-600 "></div>
        </div>
      </div>
    </div>
  );
};
