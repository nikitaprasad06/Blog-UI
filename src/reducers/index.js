import { combineReducers } from "redux";

import { allBlogs, pageTitle } from "../Components/Home/Reducers";
import { selectedBlogId } from "../Components/Home/BlogsList/Reducers";

const allReducers = combineReducers({
  allBlogs,
  pageTitle,
  selectedBlogId,
});
export default allReducers;
