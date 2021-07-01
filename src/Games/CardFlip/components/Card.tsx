import * as CardStyle from './CardStyle';

type TCard = {
  frontChar: string,
}

const Card = (props: TCard) => {
  const { frontChar } = props;
  return (
    <CardStyle.CardContainer>
      <CardStyle.CardBody>
        <CardStyle.CardBack>?</CardStyle.CardBack>
        <CardStyle.CardFront>{frontChar}</CardStyle.CardFront>
      </CardStyle.CardBody>
    </CardStyle.CardContainer>
  );
}

export default Card;
