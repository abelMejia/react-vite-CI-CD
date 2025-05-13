import { render, screen } from '@testing-library/react';
import { TextField } from './TextFiel';

describe("Button component", () => {
  it("renders correctly", () => {
    render(<TextField />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
