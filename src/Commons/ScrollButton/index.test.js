import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ScrollButton } from "./index";

describe("<ScrollButton />", () => {
  window.scrollTo = jest.fn();
  const setup = () => {
    const utils = render(<ScrollButton pageTitle="blogDetails" />);
    return {
      utils,
    };
  };

  afterEach(cleanup);

  test("should contain ScrollButton component", () => {
    setup();
    const scrollButtonContainer = screen.getByTestId("scrollButtonContainer");
    expect(scrollButtonContainer).toBeInTheDocument();
  });

  test("should scroll to the top when clicked", () => {
    setup();
    const scrollButtonContainer = screen.getByTestId("scrollButtonContainer");
    fireEvent.click(scrollButtonContainer);
    expect(document.documentElement.scrollTop).toBe(0);
  });
});
