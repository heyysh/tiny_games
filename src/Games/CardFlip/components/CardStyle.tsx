import styled from 'styled-components';

const CardContainer = styled.div`
  width: 150px;
  height: 150px;
  margin-top: 10px;
  perspective: 1000px;
  &:hover > div {
    transform: rotateY(180deg);
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
  font-size: 72px;
  color: white;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

const CardBack = styled(CardBasic)`
  background-color: #ff0000;
`;

const CardFront = styled(CardBasic)`
  background-color: green;
  transform: rotateY(180deg);
`;

export { CardContainer, CardBody, CardBack, CardFront };
