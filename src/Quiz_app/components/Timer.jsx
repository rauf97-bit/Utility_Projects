import {useState, useEffect} from 'react'
import useSound from 'use-sound'
import wrong from "../../Sound/wrong.mp3"


const Timer = ({setStop, currentQtsNum}) => {
  const [playWrong] = useSound(wrong)
  const [timer, setTimer] = useState(40)
  useEffect(() => {
    if (timer === 0) {
      playWrong();
      setStop(true)
    }  
    const timerInterval = setInterval(() => {
      setTimer(prev => prev - 1 )
    }, 1000);
    return () => clearInterval(timerInterval)
  }, [setStop, timer])
  
  useEffect(() => {
    setTimer(40)
  }, [currentQtsNum])
  return timer
}

export default Timer