import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import useTimer from './useTimer';

const customOption = { timeout: 5000 };

test('Timer initialization', () => {
  const { result } = renderHook(() => useTimer(3, false));
  expect(result.current[0]).toBe(0);
})

test('Timer should return correct timer until timeout', async() => {
  const { result, waitFor } = renderHook(() => useTimer(3, true));
  
  await waitFor(() => expect(result.current[0]).toBe(1), customOption);
  await waitFor(() => expect(result.current[0]).toBe(2), customOption);
  await waitFor(() => expect(result.current[0]).toBe(3), customOption);
  await waitFor(() => expect(result.current[0]).toBe(-1), customOption);
})

test('StartTimer should reset timer to 0', async() => {
  const { result, waitFor } = renderHook(() => useTimer(3, true));

  await waitFor(() => expect(result.current[0]).toBe(3), customOption);

  act(() => result.current[1]());
  expect(result.current[0]).toBe(0);
})