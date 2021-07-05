import React, { useState } from 'react';
import * as SidebarStyle from './SidebarStyle';
import Timer from './Timer';
import { timerFormatter } from './helpers';

type TSidebarProps = {
  setAvoidAllAction: (avoidAllAction: boolean) => void;
}

const Sidebar = (props: TSidebarProps) => {
  const { setAvoidAllAction } = props;
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isInterrupt, setIsInterrupt] = useState<boolean>(false);
  const [lastTimeConsuming, setLastTimeConsuming] = useState<number>(0);

  const handleStartPlaying = () => {
    setAvoidAllAction(false);
    setIsPlaying(true);
  }

  const handleTimerResult = (timeConsuming: number, isReachTimeLimit: boolean) => {
    setLastTimeConsuming(timeConsuming);
    setIsPlaying(false);
    setIsInterrupt(false);
  }

  return (
    <SidebarStyle.Main>
      <SidebarStyle.StartButton onClick={() => handleStartPlaying()}>
        Click To Start Game
      </SidebarStyle.StartButton>
      {isPlaying
        ? <Timer timeLimit={180} isInterrupt={isInterrupt} cb={handleTimerResult} />
        : timerFormatter(lastTimeConsuming)
      }
    </SidebarStyle.Main>
  )
}

export default React.memo(Sidebar);