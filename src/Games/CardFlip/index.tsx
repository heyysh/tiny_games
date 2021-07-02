import { useState, useEffect, useRef } from 'react';
import * as CardFlipStyle from './style';
import Card from './components/Card';
import { getRandomPairCardList } from './helpers';

type TCardListState = {
  char: string;
  isOpen: boolean;
  isMatch: boolean;
}

export default function CardFlip(): JSX.Element {
  const pairNum = 6;
  const [cardList, setCardList] = useState<TCardListState[]>([]);
  const openingCard = useRef('');
  const [avoidAllAction, setAvoidAllAction] = useState<boolean>(false);

  const handleCardClick = (idx: number, char: string) => {
    const isFlipFirstCard = openingCard.current === '';
    const isMatchFlip = char === openingCard.current;
    openingCard.current = openingCard.current ? '' : char;

    handleCardOpen(idx, isMatchFlip);

    if (!isFlipFirstCard) {
      setAvoidAllAction(true);
      setTimeout(() => {
        !isFlipFirstCard && handleCardResult(idx);
        setAvoidAllAction(false);
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

  return (
    <CardFlipStyle.Playground>
      {cardList.map((card, idx) =>
        <Card
          key={`${card.char}_${idx}`}
          idx={idx}
          isOpen={card.isOpen}
          isMatch={card.isMatch}
          avoidAllAction={avoidAllAction}
          char={card.char}
          handleCardClick={handleCardClick}
        />
      )}
    </CardFlipStyle.Playground>
  );
}