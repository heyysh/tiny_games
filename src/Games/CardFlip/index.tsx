import { useState, useEffect } from 'react';
import * as CardFlipStyle from './style';
import Card from './components/Card';
import { getRandomPairCardList } from './helpers';

type TCardListState = {
  char: string;
  isOpen: boolean;
}

export default function CardFlip(): JSX.Element {
  const pairNum = 5;
  const [cardList, setCardList] = useState<TCardListState[]>([]);

  const handleCardClick = (idx: number) => {
    setCardList((prev) => {
      return prev.map((prevItem, prevIdx) => {
        if (idx !== prevIdx) return prevItem;
        return {...prevItem, isOpen: !prevItem.isOpen};
      });
    })
  }

  useEffect(() => {
    const initCardList = getRandomPairCardList(pairNum).map((itm) => ({
      char: itm,
      isOpen: false
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
          char={card.char}
          handleCardClick={handleCardClick}
        />
      )}
    </CardFlipStyle.Playground>
  );
}