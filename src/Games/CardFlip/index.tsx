import { useState } from 'react';
import * as CardFlipStyle from './style';
import Playground from './components/Playground';
import Sidebar from './components/Sidebar';

export default function CardFlip(): JSX.Element {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isGameSet, setIsGameSet] = useState<boolean>(false);

  const setGameStart = (): void => {
    setIsPlaying(true);
    setIsGameSet(false);
  }

  const setGameSet = (): void => {
    setIsGameSet(true);
    setIsPlaying(false);
  }

  return (
    <CardFlipStyle.Main data-testid="card-flip-main">
      <Sidebar
        isPlaying={isPlaying}
        setGameStart={setGameStart}
        setGameSet={setGameSet}
        isGameSet={isGameSet}
      />
      <Playground
        isPlaying={isPlaying}
        setGameSet={setGameSet}
        pairNum={9}
      />
    </CardFlipStyle.Main>
  );
}