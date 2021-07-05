import { useEffect, useState } from 'react';
import * as TimerStyle from './TimerStyle';
import { timerFormatter } from './helpers';

type TTimerProps = {
  timeLimit: number;
  isInterrupt: boolean;
  cb: (timeCounter: number, isReachTimeLimit: boolean) => void;
}

const Timer = (props: TTimerProps) => {
  const { timeLimit, isInterrupt, cb }= props;
  const [timeCounter, setTimeCounter] = useState(0);

  useEffect(() => {
    if (timeCounter >= timeLimit || isInterrupt) {
      cb(timeCounter, !isInterrupt);
    } else {
      const counterId = setInterval(() => {
        setTimeCounter(timeCounter + 1);
      }, 1000);
      return () => clearInterval(counterId);
    }
  }, [timeCounter, timeLimit, isInterrupt, cb])

  return (
    <TimerStyle.TimerContainer>
      {timerFormatter(timeCounter)}
    </TimerStyle.TimerContainer>
  )
}

export default Timer;
