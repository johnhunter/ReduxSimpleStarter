import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import PostsNew from '../components/posts_new';

function validate (values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Please enter a title!';
  }
  if (!values.categories) {
    errors.categories = 'Please enter some categories!';
  }
  if (!values.content) {
    errors.content = 'Please enter some content!';
  }

  return errors;
}

// Note: reduxForm HOC wraps the redux connect HOC
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);
