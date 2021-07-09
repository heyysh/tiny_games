import * as CardStyle from './CardStyle';

export type TCardProps = {
  idx: number;
  isOpen: boolean;
  isMatch: boolean;
  pauseInteraction: boolean;
  char: string;
  handleCardClick: (idx: number, char: string) => void;
}

const Card = (props: TCardProps) => {
  const { idx, isOpen, isMatch, pauseInteraction, char, handleCardClick } = props;

  return (
    <CardStyle.CardContainer isOpen={isOpen} isMatch={isMatch}>
      <CardStyle.CardBody
        data-testid="card-body"
        onClick={() => (!pauseInteraction && !isOpen && !isMatch) && handleCardClick(idx, char)}
      >
        <CardStyle.CardBack>?</CardStyle.CardBack>
        <CardStyle.CardFront isOpen={isOpen} isMatch={isMatch}>{char}</CardStyle.CardFront>
      </CardStyle.CardBody>
    </CardStyle.CardContainer>
  );
}

export default Card;
