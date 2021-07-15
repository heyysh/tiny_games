import React, { useEffect, useState } from 'react';
import * as SidebarStyle from './SidebarStyle';
import { timerFormatter } from './helpers';
import useTimer from '../hooks/useTimer';

type TSidebarProps = {
  isPlaying: boolean;
  setGameStart: () => void;
  isGameSet: boolean;
  setGameSet: () => void;
}

const Sidebar = (props: TSidebarProps) => {
  const { isPlaying, isGameSet, setGameStart, setGameSet } = props;
  const timeLimit = 120;
  const [lastTenRecords, setLastTenRecords] = useState<number[]>([]);
  const [timer, startTimer] = useTimer(timeLimit, isPlaying);

  const handleStartPlaying = (): void => {
    setGameStart();
    startTimer();
  }

  useEffect(() => {
    if(isGameSet) {
      setLastTenRecords((prev) => {
        const newRecords = [timer, ...prev];
        if (newRecords.length > 10) newRecords.pop();
        return newRecords;
      });
    }
  }, [isGameSet, timer])

  useEffect(() => {
    timer === -1 && setGameSet();
  }, [timer, setGameSet])

  return (
    <SidebarStyle.Main>
      <SidebarStyle.StartButton
        data-testid="start-button"
        isPlaying={isPlaying}
        onClick={() => !isPlaying && handleStartPlaying()}
      >
        {isPlaying
          ? <div>{timerFormatter(timer)}</div>
          : <div>START</div>
        }
      </SidebarStyle.StartButton>
      <SidebarStyle.RecordsContainer>
        <SidebarStyle.Title>Time limit: 2 mins</SidebarStyle.Title>
        <SidebarStyle.Title>Last 10 records:</SidebarStyle.Title>
        <ul>
          {lastTenRecords.map((item, idx) => {
            return item === -1
              ? <SidebarStyle.RecordTimeout key={`${item}_${idx}`}>Timeout</SidebarStyle.RecordTimeout>
              : <SidebarStyle.Record key={`${item}_${idx}`}>{timerFormatter(item)}</SidebarStyle.Record>
          })}
        </ul>
      </SidebarStyle.RecordsContainer> 
    </SidebarStyle.Main>
  )
}

export default Sidebar;