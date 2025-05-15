import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { vi } from "vitest";

describe("Button Component", () => {
  it("renders the button with the correct label", () => {
    render(<Button label="Click Me" onClick={() => {}} />);
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me");
  });

  it("calls the onClick function when clicked", () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const button = screen.getByTestId("button");

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
