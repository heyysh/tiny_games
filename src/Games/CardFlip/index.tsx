import { useState } from 'react';
import * as CardFlipStyle from './style';
import Playground from './components/Playground';
import Sidebar from './components/Sidebar';


export default function CardFlip(): JSX.Element {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isGameSet, setIsGameSet] = useState<boolean>(false);

  return (
    <CardFlipStyle.Main>
      <Sidebar
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        isGameSet={isGameSet}
      />
      <Playground
        isPlaying={isPlaying}
        setIsGameSet={setIsGameSet}
      />
    </CardFlipStyle.Main>
  );
}