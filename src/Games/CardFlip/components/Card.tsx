import * as CardStyle from './CardStyle';

type TCard = {
  idx: number;
  isOpen: boolean;
  isMatch: boolean;
  char: string;
  handleCardClick: (idx: number, char: string) => void;
}

const Card = (props: TCard) => {
  const { idx, isOpen, isMatch, char, handleCardClick } = props;

  return (
    <CardStyle.CardContainer isOpen={isOpen || isMatch}>
      <CardStyle.CardBody onClick={() => !isOpen && handleCardClick(idx, char)}>
        <CardStyle.CardBack>?</CardStyle.CardBack>
        <CardStyle.CardFront>{char}</CardStyle.CardFront>
      </CardStyle.CardBody>
    </CardStyle.CardContainer>
  );
}

export default Card;
