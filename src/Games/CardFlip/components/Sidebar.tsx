import React, { useState } from 'react';
import * as SidebarStyle from './SidebarStyle';
import Timer from './Timer';
import { timerFormatter } from './helpers';

type TSidebarProps = {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

const Sidebar = (props: TSidebarProps) => {
  const { isPlaying, setIsPlaying } = props;
  // const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [lastTimeConsuming, setLastTimeConsuming] = useState<number>(0);

  const handleStartPlaying = () => {
    setIsPlaying(true);
  }

  const handleTimerResult = (timeConsuming: number, isReachTimeLimit: boolean) => {
    setLastTimeConsuming(timeConsuming);
    setIsPlaying(false);
  }

  return (
    <SidebarStyle.Main>
      <SidebarStyle.StartButton onClick={() => handleStartPlaying()}>
        Click To Start Game
      </SidebarStyle.StartButton>
      {isPlaying
        ? <Timer timeLimit={10} isInterrupt={false} cb={handleTimerResult} />
        : timerFormatter(lastTimeConsuming)
      }
    </SidebarStyle.Main>
  )
}

export default React.memo(Sidebar);