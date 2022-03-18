import { connect } from 'react-redux';
import { BlogList } from './index';
import { getSelectedBlogId } from './Actions'

const mapStateToProps = (state) => ({
    blogPosts: state.allBlogs,
});

const mapDispatchToProps = (dispatch) => ({
    getSelectedBlogId: (data) => dispatch(getSelectedBlogId(data))
});

export const BlogListContainer = connect(mapStateToProps, mapDispatchToProps)(BlogList);
