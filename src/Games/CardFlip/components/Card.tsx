import * as CardStyle from './CardStyle';

type TCard = {
  idx: number;
  isOpen: boolean;
  char: string;
  handleCardClick: (idx: number) => void;
}

const Card = (props: TCard) => {
  const { idx, isOpen, char, handleCardClick } = props;

  return (
    <CardStyle.CardContainer isOpen={isOpen}>
      <CardStyle.CardBody onClick={() => handleCardClick(idx)}>
        <CardStyle.CardBack>?</CardStyle.CardBack>
        <CardStyle.CardFront>{char}</CardStyle.CardFront>
      </CardStyle.CardBody>
    </CardStyle.CardContainer>
  );
}

export default Card;
