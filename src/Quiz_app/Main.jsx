import React, {useState, useEffect} from "react";
import Hero from "./components/Hero";
import Pyramids from "./components/Pyramids";
import { steps, questions } from "./Data";
import User from "./components/User";
import useSound from "use-sound";
import play from "../Sound/play.mp3"
export const Main = () => {
  const [currentQtsNum, setCurrentQtsNum] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0")
  const [user, setUser] = useState('')
  const [playStart] = useSound(play)
  useEffect(() => {
    if (currentQtsNum > 1) {
      setEarned(steps.find((step) => step.id === currentQtsNum - 1).amount)
    }
  }, [currentQtsNum, steps])
  useEffect(() => {
    user && playStart()
  }, [user, playStart])
    
  return (
    <>
      {stop ? (
        <h1 className="flex bg-gradient-to-b to-indigo-900 from-black items-center justify-center  h-[100vh] w-[100vw]">
          <span className="text-5xl text-center text-white">Congratulations {user} you earned {earned}</span>
        </h1>
      ) : (
        
        <>{
          !user ? <User setUser={setUser}/> :
          <div className="w-[100vw] h-[100vh] grid grid-cols-4 overflow-hidden">
            <Hero
            user={user}
              questions={questions}
              currentQtsNum={currentQtsNum}
              setCurrentQtsNum={setCurrentQtsNum}
              setStop={setStop}
            />
            <Pyramids pyramid={steps} currentQtsNum={currentQtsNum} />
          </div>
          }
        </>
      )}
    </>
  );
};
