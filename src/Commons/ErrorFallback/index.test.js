import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ErrorFallback } from "./index";

describe("<ErrorFallback />", () => {
  const setup = () => {
    const utils = render(<ErrorFallback />);
    return {
      utils,
    };
  };

  afterEach(cleanup);

  test("should contain ErrorFallback component", () => {
    setup();
    const errorFallbackContainer = screen.getByTestId("errorFallbackContainer");
    expect(errorFallbackContainer).toBeInTheDocument();
  });
});
