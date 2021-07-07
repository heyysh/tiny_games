import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import { Routes } from './App';

test('CardFlip should be rendered correctly with exact path', () => {
  render(
    <MemoryRouter initialEntries={['/card-flip']}>
      <Routes />
    </MemoryRouter>
  );
  expect(screen.getByTestId('card-flip-main')).toBeInTheDocument();
})

test('Maze should be rendered correctly with exact path', () => {
  render(
    <MemoryRouter initialEntries={['/maze']}>
      <Routes />
    </MemoryRouter>
  );
  expect(screen.getByText(/Maze/)).toBeInTheDocument();
})

test('Should redirect to CardFlip as default page with any path', () => {
  render(
    <MemoryRouter initialEntries={['/unknown']}>
      <Routes />
    </MemoryRouter>
  );
  expect(screen.getByTestId('card-flip-main')).toBeInTheDocument();
})