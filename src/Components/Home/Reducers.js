import { blogPosts } from "../../blogs";

const initialState = blogPosts;

export const allBlogs = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_BLOGS_REQUESTED":
      return state;
    default:
      return state;
  }
};

export const pageTitle = (state = 'home', action) => {
  switch (action.type) {
    case "SET_PAGE_TITLE":
      return action.data;
    default:
      return state;
  }
};
