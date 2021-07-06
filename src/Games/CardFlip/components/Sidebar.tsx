import React, { useState } from 'react';
import * as SidebarStyle from './SidebarStyle';
import Timer from './Timer';
import { timerFormatter } from './helpers';

type TSidebarProps = {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  isGameSet: boolean;
}

type TLastTenRecords = {
  time: string;
  isReachTimeLimit: boolean;
}

const Sidebar = (props: TSidebarProps) => {
  const { isPlaying, isGameSet, setIsPlaying } = props;
  const [lastTenRecords, setLastTenRecords] = useState<TLastTenRecords[]>([]);

  const handleStartPlaying = (): void => {
    setIsPlaying(true);
  }

  const handleTimerResult = (timeConsuming: number, isReachTimeLimit: boolean): void => {
    setLastTenRecords((prev) => {
      const newRecords = [{
        time: timerFormatter(timeConsuming),
        isReachTimeLimit
      }, ...prev];
      if (newRecords.length > 10) newRecords.pop();
      return newRecords;
    });
    setIsPlaying(false);
  }

  return (
    <SidebarStyle.Main>
      <SidebarStyle.StartButton
        isPlaying={isPlaying}
        onClick={() => !isPlaying && handleStartPlaying()}
      >
        {isPlaying
          ? <Timer timeLimit={120} isInterrupt={isGameSet} cb={handleTimerResult} />
          : 'START'
        }
      </SidebarStyle.StartButton>
      <SidebarStyle.RecordsContainer>
        <SidebarStyle.Title>Time limit: 2 mins</SidebarStyle.Title>
        <SidebarStyle.Title>Last 10 records:</SidebarStyle.Title>
        <ul>
          {lastTenRecords.map((item, idx) => {
            return item.isReachTimeLimit
              ? <SidebarStyle.RecordTimeout key={`${item}_${idx}`}>Timeout</SidebarStyle.RecordTimeout>
              : <SidebarStyle.Record key={`${item}_${idx}`}>{item.time}</SidebarStyle.Record>
          })}
        </ul>
      </SidebarStyle.RecordsContainer> 
    </SidebarStyle.Main>
  )
}

export default React.memo(Sidebar);