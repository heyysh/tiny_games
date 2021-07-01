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
  const pairNum = 5;
  const [cardList, setCardList] = useState<TCardListState[]>([]);
  const openingCard = useRef('');

  const handleCardClick = (idx: number, char: string) => 
    (openingCard.current === '')
      ? handleFirstCardFlip(idx, char)
      : handleSecondCardFlip(idx, char);

  const handleFirstCardFlip = (idx: number, char: string) => {
    setCardList((prev) => {
      return prev.map((prevItem, prevIdx) => {
        if (idx !== prevIdx) return prevItem;
        return {...prevItem, isOpen: true};
      });
    })
    openingCard.current = char;
  }

  const handleSecondCardFlip = (idx: number, char: string) => {
    const isMatchFlip = char === openingCard.current;

    setCardList((prev) => {
      return prev.map((prevItem, prevIdx) => {
        if (idx !== prevIdx) {
          if (!prevItem.isOpen) return prevItem;
          return {...prevItem, isOpen: false, isMatch: isMatchFlip};
        }
        return {...prevItem, isOpen: false, isMatch: isMatchFlip};
      });
    })

    openingCard.current = '';
  }

  useEffect(() => {
    const initCardList = getRandomPairCardList(pairNum).map((itm) => ({
      char: itm,
      isOpen: false,
      isMatch: false
    }));
    setCardList(initCardList);
  }, []);

  console.log(cardList);
  console.log(openingCard.current);
  return (
    <CardFlipStyle.Playground>
      {cardList.map((card, idx) =>
        <Card
          key={`${card.char}_${idx}`}
          idx={idx}
          isOpen={card.isOpen}
          isMatch={card.isMatch}
          char={card.char}
          handleCardClick={handleCardClick}
        />
      )}
    </CardFlipStyle.Playground>
  );
}