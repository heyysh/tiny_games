
import { fireEvent, render, screen } from "@testing-library/react";
import Sidebar from "../Sidebar";
import { default as mockTimer } from '../../hooks/useTimer';

jest.mock('../../hooks/useTimer');

const props = {
  isPlaying: false,
  setGameStart: jest.fn(),
  isGameSet: false,
  setGameSet: jest.fn(),
}

test('Sidebar initialization', () => {
  (mockTimer as jest.Mock).mockReturnValue([0, () => jest.fn()]);
  render(<Sidebar {...props} />);
  expect(screen.getByText(/START/)).toBeInTheDocument();
})

test('Click Start Button and trigger setGameStart function', () => {
  (mockTimer as jest.Mock).mockReturnValue([0, () => jest.fn()]);
  render(<Sidebar {...props} />);
  fireEvent.click(screen.getByTestId('start-button'));
  expect(props.setGameStart).toBeCalledTimes(1);
})

test('Render corresponding time when game set', () => {
  (mockTimer as jest.Mock).mockReturnValue([10, () => jest.fn()]);
  const newProps = {
    ...props,
    isGameSet: true,
  }
  
  render(<Sidebar {...newProps} />);
  expect(screen.getByText(/00 : 10/)).toBeInTheDocument();
})

test('Reach timeout and trigger setGameSet function', () => {
  (mockTimer as jest.Mock).mockReturnValue([-1, () => jest.fn()]);
  const newProps = {
    ...props,
    isPlaying: true,
  }
  render(<Sidebar {...newProps} />);

  expect(newProps.setGameSet).toBeCalledTimes(1);
})

test('Render Timeout', () => {
  (mockTimer as jest.Mock).mockReturnValue([-1, () => jest.fn()]);
  const newProps = {
    ...props,
    isGameSet: true,
  }
  
  render(<Sidebar {...newProps} />);
  expect(screen.getByText(/Timeout/)).toBeInTheDocument();
})

test('Last records reaches maximum', () => {
  (mockTimer as jest.Mock).mockReturnValue([59, () => jest.fn()]);
  const newProps = {
    ...props,
    isGameSet: true,
  }
  
  const newPropsWithoutGameSet = {
    ...props,
    isGameSet: false,
  }

  const { rerender } = render(<Sidebar {...newProps} />);

  for ( let i = 0; i < 11; i++) {
    rerender(<Sidebar {...newPropsWithoutGameSet} />);
    rerender(<Sidebar {...newProps} />);
  }

  expect(screen.getAllByText(/00 : 59/).length).toEqual(10);
})