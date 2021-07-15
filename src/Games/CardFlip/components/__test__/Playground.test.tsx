import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import Playground from "../Playground";

jest.setTimeout(10000);

function sleep(milliseconds: number) {
  return new Promise<any>((resolve) => setTimeout(resolve, milliseconds));
}

jest.mock('../helpers', () => ({
  __esModule: true,
  getRandomPairCardList: () => ['A', 'A', 'K', 'K'],
}));

const props = {
  isPlaying: false,
  setGameSet: jest.fn(),
  pairNum: 2,
}

test('Playground initialization', () => {
  render(<Playground {...props} />);
  expect(screen.getAllByText(/\?/).length).toBe(4);
  expect(screen.getAllByTestId('card-back').length).toBe(4);
})

test('Playground behavior of clicking different pair', async() => {
  const newProps = {
    ...props,
    isPlaying: true,
  }
  render(<Playground {...newProps} />);

  const cards = screen.getAllByTestId('card-body');

  fireEvent.click(cards[0]);
  expect(screen.getAllByTestId('card-front').length).toBe(1);

  await act(() => sleep(2000));

  fireEvent.click(cards[2]);
  expect(screen.getAllByTestId('card-front').length).toBe(2);

  await act(() => sleep(2000));

  expect(screen.getAllByTestId('card-back').length).toBe(4);
})

test('Playground behavior of complete game', async() => {
  const newProps = {
    ...props,
    isPlaying: true,
  }
  render(<Playground {...newProps} />);

  const cards = screen.getAllByTestId('card-body');

  fireEvent.click(cards[0]);
  expect(screen.getAllByTestId('card-front').length).toBe(1);

  await act(() => sleep(2000));

  fireEvent.click(cards[1]);
  expect(screen.getAllByTestId('card-front').length).toBe(2);

  await act(() => sleep(2000));

  fireEvent.click(cards[2]);
  expect(screen.getAllByTestId('card-front').length).toBe(3);

  await act(() => sleep(2000));

  fireEvent.click(cards[3]);
  expect(screen.getAllByTestId('card-front').length).toBe(4);

  expect(newProps.setGameSet).toBeCalledTimes(1);
})