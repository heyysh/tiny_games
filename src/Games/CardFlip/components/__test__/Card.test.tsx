import { fireEvent, render, screen } from "@testing-library/react";
import Card, { TCardProps } from "../Card";

const props = {
  idx: 0,
  isOpen: false,
  isMatch: false,
  pauseInteraction: false,
  char: 'A',
  handleCardClick: jest.fn(),
}

test('Card back and front should be rendered', () => {
  render(<Card {...props} />);
  expect(screen.getByText(/\?/)).toBeInTheDocument();
  expect(screen.getByText(/A/)).toBeInTheDocument();
})

test('Card callback should be triggered by click', () => {
  render(<Card {...props} />);

  fireEvent.click(screen.getByTestId('card-body'));

  expect(props.handleCardClick).toBeCalledTimes(1);
  expect(props.handleCardClick).toHaveBeenCalledWith(0, 'A');
})

const cbNotTriggeredWithSpecificProps = (props: TCardProps) => {
  render(<Card {...props} />);
  fireEvent.click(screen.getByTestId('card-body'));
  expect(props.handleCardClick).toBeCalledTimes(0);
}

test('Card callback should not be triggered if isOpen is true', () => {
  cbNotTriggeredWithSpecificProps({...props, isOpen: true});
})

test('Card callback should not be triggered if isMatch is true', () => {
  cbNotTriggeredWithSpecificProps({...props, isMatch: true});
})

test('Card callback should not be triggered if pauseInteraction is true', () => {
  cbNotTriggeredWithSpecificProps({...props, pauseInteraction: true});
})