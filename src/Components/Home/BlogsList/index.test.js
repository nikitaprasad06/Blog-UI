import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureStore from "../../../store/configureStore";
import { BlogList } from "./index";
import { blogPosts } from '../../../blogs'

describe("<BlogList />", () => {
  const getSelectedBlogId = jest.fn()
  const setup = () => {
    const utils = render(
      <MemoryRouter>
        <Provider store={configureStore()}>
          <BlogList
            blogPosts={blogPosts}
            getSelectedBlogId={getSelectedBlogId}
          />
        </Provider>
      </MemoryRouter>
    );
    return {
      utils,
    };
  };

  afterEach(cleanup);

  test("should contain BlogList component", () => {
    setup();
    const blogListContainer = screen.getByTestId("blogListContainer");
    expect(blogListContainer).toBeInTheDocument();
  });
});
