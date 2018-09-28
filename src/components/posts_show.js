import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost, deletePost } from '../actions/index';

const shouldReFetchPost = true;

class PostsShow extends Component {
  onDeleteClick = () => {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    if (shouldReFetchPost || !this.props.post) {
      this.props.fetchPost(id);
    }
  }
  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link to="/">Back to index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps ({ posts }, ownProps) {
  const { id } = ownProps.match.params;
  return { post: posts[id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
