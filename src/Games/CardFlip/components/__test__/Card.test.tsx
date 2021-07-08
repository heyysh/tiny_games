import { fireEvent, render, screen } from "@testing-library/react";
import Card from "../Card";

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
  const { getByTestId } = render(<Card {...props} />);

  fireEvent.click(getByTestId('card-body'));

  expect(props.handleCardClick).toBeCalledTimes(1);
  expect(props.handleCardClick).toHaveBeenCalledWith(0, 'A');
})

test('Card callback should not be triggered if isOpen is true', () => {
  const newProps = {
    ...props,
    isOpen: true
  }
  const { getByTestId } = render(<Card {...newProps} />);

  fireEvent.click(getByTestId('card-body'));

  expect(newProps.handleCardClick).toBeCalledTimes(0);
})

test('Card callback should not be triggered if isMatch is true', () => {
  const newProps = {
    ...props,
    isMatch: true
  }
  const { getByTestId } = render(<Card {...newProps} />);

  fireEvent.click(getByTestId('card-body'));

  expect(newProps.handleCardClick).toBeCalledTimes(0);
})

test('Card callback should not be triggered if pauseInteraction is true', () => {
  const newProps = {
    ...props,
    pauseInteraction: true
  }
  const { getByTestId } = render(<Card {...newProps} />);

  fireEvent.click(getByTestId('card-body'));

  expect(newProps.handleCardClick).toBeCalledTimes(0);
})