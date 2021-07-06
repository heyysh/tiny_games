import { useEffect, useState } from 'react';
import { timerFormatter } from './helpers';

type TTimerProps = {
  timeLimit: number;
  isInterrupt: boolean;
  cb: (time: number, isReachTimeLimit: boolean) => void;
}

const Timer = (props: TTimerProps) => {
  const { timeLimit, isInterrupt, cb }= props;
  const [timeCounter, setTimeCounter] = useState(0);

  useEffect(() => {
    const isReachTimeLimit = timeCounter > timeLimit;
    if (isReachTimeLimit || isInterrupt) {
      cb(timeCounter, isReachTimeLimit);
    } else {
      const counterId = setInterval(() => {
        setTimeCounter(timeCounter + 1);
      }, 1000);
      return () => clearInterval(counterId);
    }
  }, [timeCounter, timeLimit, isInterrupt, cb])

  return (
    <>
      {timerFormatter(timeCounter)}
    </>
  )
}

export default Timer;
