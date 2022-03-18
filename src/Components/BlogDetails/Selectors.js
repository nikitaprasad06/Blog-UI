import { createSelector } from "reselect"

const __selectBlogDetails = (state) =>
  state?.allBlogs && state?.selectedBlogId
    ? state.allBlogs.filter(row => row.id === state.selectedBlogId)
    : []

export const selectBlogDetails = createSelector(
  __selectBlogDetails,
  (blogDetails) => {
    return blogDetails
  }
)
