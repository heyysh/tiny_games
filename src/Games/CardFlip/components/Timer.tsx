import { useEffect, useState } from 'react';
import * as TimerStyle from './TimerStyle';
import { timerFormatter } from './helpers';

type TTimerProps = {
  limit: number;
  isInterrupt: boolean;
  cb: (timeCounter: number) => void;
}

const Timer = (props: TTimerProps) => {
  const { limit, isInterrupt, cb }= props;
  const [timeCounter, setTimeCounter] = useState(0);

  useEffect(() => {
    if (timeCounter >= limit || isInterrupt) {
      cb(timeCounter);
    } else {
      const counterId = setInterval(() => {
        setTimeCounter(timeCounter + 1);
      }, 1000);
      return () => clearInterval(counterId);
    }
  }, [timeCounter, limit, isInterrupt, cb])

  return (
    <TimerStyle.TimerContainer>
      <TimerStyle.MinuteAndSecond>
        {timerFormatter(timeCounter)}
      </TimerStyle.MinuteAndSecond>
    </TimerStyle.TimerContainer>
  )
}

export default Timer;
