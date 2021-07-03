import { useState } from 'react';
import * as SidebarStyle from './SidebarStyle';
import Timer from './Timer';
import { timerFormatter } from './helpers';

const Sidebar = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isInterrupt, setIsInterrupt] = useState<boolean>(false);
  const [lastTimeConsuming, setLastTimeConsuming] = useState<number>(0);

  const handleGamePlaying = () => setIsPlaying(true);
  const handleStopPlaying = () => setIsInterrupt(true); // temp.

  const handleTimerResult = (timeConsuming: number) => {
    setLastTimeConsuming(timeConsuming);
    setIsPlaying(false);
    setIsInterrupt(false);
  }

  return (
    <SidebarStyle.Main>
      <SidebarStyle.StartButton onClick={() => handleGamePlaying()}>
        Click To Start
      </SidebarStyle.StartButton>
      <SidebarStyle.StartButton onClick={() => handleStopPlaying()}>
        Stop
      </SidebarStyle.StartButton>
      {isPlaying
        ? <Timer limit={180} isInterrupt={isInterrupt} cb={handleTimerResult} />
        : timerFormatter(lastTimeConsuming)
      }    
    </SidebarStyle.Main>
  )
}

export default Sidebar;