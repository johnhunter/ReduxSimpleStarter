import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import PostsShow from '../components/posts_show';


function mapStateToProps ({ posts }, ownProps) {
  const { id } = ownProps.match.params;
  return { post: posts[id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
