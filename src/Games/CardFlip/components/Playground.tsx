import { useState, useEffect, useRef } from 'react';
import * as PlaygroundStyle from './PlaygroundStyle';
import Card from './Card';
import { getRandomPairCardList } from './helpers';

type TPlaygroundProps = {
  isPlaying: boolean;
  setIsGameSet: (isGameSet: boolean) => void;
}

type TCardListState = {
  char: string;
  isOpen: boolean;
  isMatch: boolean;
}

export default function Playground(props: TPlaygroundProps): JSX.Element {
  const { isPlaying, setIsGameSet } = props;
  const pairNum = 3;
  const [cardList, setCardList] = useState<TCardListState[]>([]);
  const openingCard = useRef('');
  const [matchedCardCount, setMatchedCardCount] = useState<number>(0);
  const [pauseInteraction, setPauseInteraction] = useState<boolean>(false);

  const handleCardClick = (idx: number, char: string) => {
    const isFlipFirstCard = openingCard.current === '';
    const isMatchFlip = char === openingCard.current;
    openingCard.current = openingCard.current ? '' : char;

    handleCardOpen(idx, isMatchFlip);
    if (isMatchFlip) setMatchedCardCount((prev)=>  prev + 1);
    if (!isFlipFirstCard) {
      setPauseInteraction(true);
      setTimeout(() => {
        !isFlipFirstCard && handleCardResult(idx);
        setPauseInteraction(false);
      }, 1000);
    } 
  }
  
  const handleCardOpen = (idx: number, isMatchFlip: boolean) => {
    setCardList((prev) => {
      return prev.map((prevItem, prevIdx) => {
        if (idx !== prevIdx) {
          if (!prevItem.isOpen) return prevItem;
          return {...prevItem, isOpen: true, isMatch: isMatchFlip};
        }
        return {...prevItem, isOpen: true, isMatch: isMatchFlip};
      });
    })
  }

  const handleCardResult = (idx: number) => {
    setCardList((prev) => {
      return prev.map((prevItem, prevIdx) => {
        if (idx !== prevIdx) {
          if (!prevItem.isOpen) return prevItem;
          return {...prevItem, isOpen: false};
        }
        return {...prevItem, isOpen: false};
      });
    })
  }

  useEffect(() => {
    const initCardList = getRandomPairCardList(pairNum).map((itm) => ({
      char: itm,
      isOpen: false,
      isMatch: false
    }));
    setCardList(initCardList);
  }, []);

  useEffect(()=> {
    if(pairNum === matchedCardCount) setIsGameSet(true); 
  }, [setIsGameSet, matchedCardCount])

  return (
    <PlaygroundStyle.Playground>
      {cardList.map((card, idx) =>
        <Card
          key={`${card.char}_${idx}`}
          idx={idx}
          isOpen={card.isOpen}
          isMatch={card.isMatch}
          pauseInteraction={!isPlaying || pauseInteraction}
          char={card.char}
          handleCardClick={handleCardClick}
        />
      )}
    </PlaygroundStyle.Playground>
  );
}