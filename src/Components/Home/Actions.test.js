import { getAllBlogsDetails, setPageTitle } from "./Actions";
import "@testing-library/jest-dom/extend-expect";

describe("Action tests", () => {
  test("should honor the data passed to getAllBlogsDetails action", () => {
    expect(getAllBlogsDetails({ data: "some data" })).toEqual({
      data: { data: "some data" },
      type: "ALL_BLOGS_DETAILS_REQUESTED",
    });
  });

  test("should honor the data passed to setPageTitle action", () => {
    expect(setPageTitle({ data: "some data" })).toEqual({
      data: { data: "some data" },
      type: "SET_PAGE_TITLE",
    });
  });
});

