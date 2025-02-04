import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

import App from "../App";

// Test for checkbox
test("checkbox is initially unchecked", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  expect(addPepperoni).not.toBeChecked();
});

test("checkbox appears as checked when user clicks it", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  userEvent.click(addPepperoni);
  expect(addPepperoni).toBeChecked();
});

test("checkbox appears as unchecked when user clicks a second time", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  userEvent.click(addPepperoni);
  expect(addPepperoni).toBeChecked();
  userEvent.click(addPepperoni);
  expect(addPepperoni).not.toBeChecked();
});

// Test for selecting pepperoni and the 'Your selection' message update
test("selecting pepperoni updates the 'Your selection' message", () => {
  render(<App />);

  // Find the checkbox and size select element
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  const selectSize = screen.getByLabelText(/select size/i); // This is the "Select size" dropdown
  
  // Initial state: No pepperoni, default size is 'Small'
  expect(screen.getByText(/small cheese/i)).toBeInTheDocument(); // This depends on your initial rendering logic

  // Select pepperoni
  userEvent.click(addPepperoni);
  expect(screen.getByText(/small pepperoni/i)).toBeInTheDocument(); // Expect "small pepperoni" in the message

  // Now select a size (e.g., "Medium")
  userEvent.selectOptions(selectSize, "medium");

  // Check the updated message: "medium pepperoni"
  expect(screen.getByText(/medium pepperoni/i)).toBeInTheDocument();
});
