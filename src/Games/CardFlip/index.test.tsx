import { render, fireEvent, screen } from "@testing-library/react";
import CardFlip from './index';

jest.mock('./hooks/useTimer', () => ({
  __esModule: true,
  default: () => [-1, () => jest.fn()],
}))

test('CardFlip entry', async() => {
  render(<CardFlip />);

  fireEvent.click(screen.getByTestId('start-button'));

  expect(screen.getByTestId('card-flip-main')).toBeInTheDocument();
})
