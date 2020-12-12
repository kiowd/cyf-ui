import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Button } from "..";

describe("Button", () => {
  test("matches snapshots for primary", () => {
    const mockOnClick = jest.fn(() => null);

    const { container } = render(
      <Button onClick={mockOnClick} variant="primary">
        Click Me
      </Button>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("onClick is called upon user click", () => {
    const mockOnClick = jest.fn(() => null);

    const { getByText } = render(
      <Button label="Button" onClick={mockOnClick} variant="secondary">
        Click Me
      </Button>
    );

    const button = getByText("Click Me");
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
