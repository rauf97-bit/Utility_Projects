import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import useSound from "use-sound";
import wrong from "../../Sound/wrong.mp3"
import correct from "../../Sound/correct.mp3"
// import play from "../../Sound/play.mp3"

const Hero = ({ user, questions, currentQtsNum, setCurrentQtsNum, setStop }) => {
  const [playCorrect] = useSound(correct)
  const [playWrong] = useSound(wrong)
  // const [playStart] = useSound(play)

  const [question, setQuestion] = useState(null);
  const [verify, setVerify] = useState("answer");
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  // useEffect(() => {
  //   playStart()
  // }, [playStart])
    
  useEffect(() => {
    setQuestion(questions[currentQtsNum - 1]);
    // currentQtsNum === 15 && setStop(true)
  }, [questions, currentQtsNum]);
  // console.log(question)
  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };  
  const handleClick = (qts) => {
    setSelectedAnswer(qts);
    setVerify("answer active");
    delay(2000, () =>
      setVerify(qts.correct ? "answer bg-green-800" : "answer bg-red-600")
    );
    delay(5000, () => {
      if (qts.correct) {
        playCorrect();
        delay(1000, () => {
          setSelectedAnswer(null);
          setCurrentQtsNum((prev) => prev + 1);
        });
      } else {
        playWrong();
        delay(1000, () => setStop(true));
      }
    });
  };

  return (
    <div className="col-span-3 bg-gradient-to-b to-gray-700 from-indigo-900 text-white">
      <div className="bg-hero-pattern h-[100%]">
        <div className="top h-[50%] relative">
          <div className="timer text-4xl border-4 w-28 h-28 rounded-full flex justify-center items-center border-white absolute bottom-5 left-20">
            <Timer setStop={setStop} currentQtsNum={currentQtsNum} />
          </div>
          <div className="pt-10">
          <h1 className="p-8 mx-auto  w-[70%] rounded-md text-center border-white border-4 text-3xl">
            Hello {user}
          </h1>
          </div>
        </div>
        <div className="bottom h-[50%] flex w-[90%] mx-auto flex-col items-center justify-around">
          <div className="p-3  w-[80%] rounded-md text-center border-white border-4 text-2xl">
            {question?.question}
          </div>
          <div className="grid grid-cols-2 w-full gap-3">
            {question?.answers.map((ans, i) => (
              <div
                key={i}
                onClick={() => handleClick(ans)}
                className={` ${
                  selectedAnswer === ans ? verify : "answer"
                } col-span-1 cursor-pointer p-2  w-[90%] text-xl border-2 border-white rounded-md`}
              >
                {/* {" "}
                <svg
                  className="animate-spin h-5 w-5 mr-3"
                  viewBox="0 0 24 24"
                ></svg> */}
                {ans.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
