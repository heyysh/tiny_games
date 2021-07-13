import { useEffect, useState } from 'react';

const useTimer = (timeLimit: number, isRunning: boolean) => {
  const [timer, setTimer] = useState<number>(0); // timer === -1 for timeout
  
  const startTimer = (): void => setTimer(0);
   
  useEffect(() => {  
    if (isRunning && timeLimit >= timer && timer >= 0) {
      console.log('KKK', timer);
      const counterId = setInterval(() => {
        (timeLimit === timer) ? setTimer(-1) : setTimer(timer + 1);
      }, 1000);
      return () => clearInterval(counterId);
    }
  }, [isRunning, timeLimit, timer])

  return [timer, startTimer] as const;
}

export default useTimer;
