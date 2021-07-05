import styled from 'styled-components';

type TCardStyleProps = {
  isOpen: boolean;
  isMatch: boolean;
}

const CardContainer = styled.div<TCardStyleProps>`
  width: 150px;
  height: 175px;
  margin: 5px;
  perspective: 1000px;
  cursor: ${props => (!props.isOpen || !props.isMatch) && 'pointer'};
  & > div {
    transform: ${props => (props.isOpen || props.isMatch) && 'rotateY(180deg)'};
  }
`

const CardBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const CardBasic = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

const CardBack = styled(CardBasic)`
  background-color: lightskyblue;
  font-size: 84px;
`;

const CardFront = styled(CardBasic)<TCardStyleProps>`
  background-color: lightseagreen;
  font-size: 72px;
  transform: rotateY(180deg);
  box-shadow: ${props => (props.isOpen && props.isMatch) ? 'inset 0px 0px 30px 15px #67ebe4' : 'none'};
  transition: box-shadow 0.8s;
`;

export { CardContainer, CardBody, CardBack, CardFront };
