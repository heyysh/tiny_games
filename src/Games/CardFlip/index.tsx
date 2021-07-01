import * as CardFlipStyle from './style';
import Card from './components/Card';
import { getRandomPairCardList } from './helpers';

export default function CardFlip(): JSX.Element {
  const pairNum = 5;
  const cardList = getRandomPairCardList(pairNum);

  return (
    <>
      <CardFlipStyle.Playground>
        {cardList.map((card, idx) => <Card key={`${card}_${idx}`} frontChar={card} />)}
      </CardFlipStyle.Playground>
    </>
  );
}