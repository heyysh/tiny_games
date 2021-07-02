import * as CardStyle from './CardStyle';

type TCard = {
  idx: number;
  isOpen: boolean;
  isMatch: boolean;
  avoidAllAction: boolean;
  char: string;
  handleCardClick: (idx: number, char: string) => void;
}

const Card = (props: TCard) => {
  const { idx, isOpen, isMatch, avoidAllAction, char, handleCardClick } = props;

  return (
    <CardStyle.CardContainer isOpen={isOpen} isMatch={isMatch}>
      <CardStyle.CardBody onClick={() => (!avoidAllAction && !isOpen && !isMatch) && handleCardClick(idx, char)}>
        <CardStyle.CardBack>?</CardStyle.CardBack>
        <CardStyle.CardFront isOpen={isOpen} isMatch={isMatch}>{char}</CardStyle.CardFront>
      </CardStyle.CardBody>
    </CardStyle.CardContainer>
  );
}

export default Card;
