import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureStore from "../../Store/configureStore";
import { Home } from "./index";

describe("<Home />", () => {
  const getAllBlogsDetails = jest.fn();
  const setPageTitle = jest.fn();
  const setup = () => {
    const utils = render(
      <MemoryRouter>
        <Provider store={configureStore()}>
          <Home
            pageTitle=""
            getAllBlogsDetails={getAllBlogsDetails}
            setPageTitle={setPageTitle}
          />
        </Provider>
      </MemoryRouter>
    );
    return {
      utils,
      getAllBlogsDetails,
      setPageTitle,
    };
  };

  afterEach(cleanup);

  test("should contain Home component", () => {
    setup();
    const homeContainer = screen.getByTestId("homeContainer");
    expect(homeContainer).toBeInTheDocument();
  });
});
