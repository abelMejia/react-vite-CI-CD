// Icon.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Icon from "./Icon";

describe("Icon Component", () => {
  it("renders the success icon", () => {
    render(<Icon type="success" />);
    const icon = screen.getByTestId("icon-success");
    expect(icon).toBeInTheDocument();
  });

  it("renders the error icon", () => {
    render(<Icon type="error" />);
    const icon = screen.getByTestId("icon-error");
    expect(icon).toBeInTheDocument();
  });

  it("renders nothing for an unknown type", () => {
    render(<Icon type="unknown" />);
    expect(screen.queryByTestId("icon-success")).not.toBeInTheDocument();
    expect(screen.queryByTestId("icon-error")).not.toBeInTheDocument();
  });
});
