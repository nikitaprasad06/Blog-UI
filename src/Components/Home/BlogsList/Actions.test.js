import { getSelectedBlogId } from "./Actions";
import "@testing-library/jest-dom/extend-expect";

describe("Action tests", () => {
  test("should honor the data passed to getSelectedBlogId action", () => {
    expect(getSelectedBlogId({ data: "some data" })).toEqual({
      data: { data: "some data" },
      type: "GET_SELECTED_BLOG_ID",
    });
  });
});

