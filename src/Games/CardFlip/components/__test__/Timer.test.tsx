import { waitFor, render, screen } from "@testing-library/react";
import Timer from "../Timer";

jest.setTimeout(10000);

const props = {
  timeLimit: 5,
  isInterrupt: false,
  cb: jest.fn()
}

test('Timer should render first second to time limit sequently', async() => {
  const customOption = { timeout: 10000 };
  render(<Timer {...props} />);
  await waitFor(() => expect(screen.getByText(/00 : 01/)).toBeInTheDocument(), customOption);
  await waitFor(() => expect(screen.getByText(/00 : 02/)).toBeInTheDocument(), customOption);
  await waitFor(() => expect(screen.getByText(/00 : 03/)).toBeInTheDocument(), customOption);
  await waitFor(() => expect(screen.getByText(/00 : 04/)).toBeInTheDocument(), customOption);
  await waitFor(() => expect(screen.getByText(/00 : 05/)).toBeInTheDocument(), customOption);
  await waitFor(() => expect(props.cb).toBeCalledTimes(1), customOption);
  await waitFor(() => expect(props.cb).toBeCalledWith(6, true), customOption);
})

test('Timer isInterrupt', () => {
  const newProps = {
    ...props,
    isInterrupt: true
  }
  render(<Timer {...newProps} />);

  expect(newProps.cb).toBeCalledTimes(1);
  expect(newProps.cb).toBeCalledWith(0, false);
})