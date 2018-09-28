import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import PostsIndex from '../components/posts_index';

function mapStateToProps (state) {
  return {
    posts: state.posts
  }
}

// Note: mapDispatchToProps shortcut - provide actionCreators obj only.
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
