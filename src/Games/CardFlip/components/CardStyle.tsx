import styled from 'styled-components';

type TContainerProps = {
  isOpen: boolean;
}

const CardContainer = styled.div<TContainerProps>`
  width: 150px;
  height: 175px;
  margin-top: 10px;
  perspective: 1000px;
  cursor: ${props => !props.isOpen && 'pointer'};
  & > div {
    transform: ${props => props.isOpen && 'rotateY(180deg)'};
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

const CardFront = styled(CardBasic)`
  background-color: lightseagreen;
  font-size: 72px;
  transform: rotateY(180deg);
`;

export { CardContainer, CardBody, CardBack, CardFront };
