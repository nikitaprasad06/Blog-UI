import { selectBlogDetails } from './Selectors'
import "@testing-library/jest-dom/extend-expect";
import blogPosts from './../../blogs'

describe("Selectors tests", () => {
  test("should honor the data passed to selectBlogDetails selector", () => {
      const mockState = {  allBlogs: blogPosts, pageTitle: 'blogDetails', selectedBlogId: 2}
    expect(selectBlogDetails(mockState)).toEqual([]);
  });
});