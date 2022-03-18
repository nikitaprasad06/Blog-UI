export const selectedBlogId = (state = [], action) => {
    switch (action.type) {
      case "GET_SELECTED_BLOG_ID":
        return action.data;
      default:
        return state;
    }
  };