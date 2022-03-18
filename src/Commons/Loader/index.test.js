import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Loader } from "./index";

describe("<Loader />", () => {
  const setup = () => {
    const utils = render(
          <Loader />
    );
    return {
      utils,
    };
  };

  afterEach(cleanup);

  test("should contain Loader component", () => {
    setup();
    const backdropLoader = screen.getByTestId("backdropLoader");
    expect(backdropLoader).toBeInTheDocument();
  });
});
