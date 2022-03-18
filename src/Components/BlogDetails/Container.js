import { connect } from 'react-redux';
import { BlogDetails } from './index';
import { setPageTitle } from '../Home/Actions'
import { selectBlogDetails } from './Selectors';

const mapStateToProps = (state) => ({
  blogDetails: selectBlogDetails(state),
  blogPosts: state.allBlogs,
});

const mapDispatchToProps = (dispatch) => ({
    setPageTitle: (data) => dispatch(setPageTitle(data)),
});

const BlogDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(BlogDetails)

export default BlogDetailsContainer
