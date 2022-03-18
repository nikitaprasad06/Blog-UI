import React from "react";
import { render, cleanup, screen , fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureStore from "../../store/configureStore";
import { AppHeader } from "./index";

describe("<AppHeader />", () => {
  const setup = () => {
    const utils = render(
      <MemoryRouter>
        <Provider store={configureStore()}>
          <AppHeader pageTitle="blogDetails" />
        </Provider>
      </MemoryRouter>
    );
    return {
      utils,
    };
  };

  afterEach(cleanup);

  test("should contain AppHeader component", () => {
    setup();
    const appHeaderContainer = screen.getByTestId("appHeaderContainer");
    expect(appHeaderContainer).toBeInTheDocument();
  });

  test("should show back navigation button when in blog details page", () => {
    setup();
    const backNavigationIcon = screen.getByTestId("backNavigationIcon");
    expect(backNavigationIcon).toBeVisible()
    fireEvent.click(backNavigationIcon)
  });
});
