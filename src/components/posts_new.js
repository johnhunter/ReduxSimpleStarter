import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InputField from './input_field'

class PostsNew extends Component {
  static propTypes = {
    createPost: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  };
  onSubmit = values => {
    this.props.createPost(values, () => {
      // Note: history prop provided by react-router
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h3>Create new post</h3>
        <Field
          name="title"
          label="Title for Post"
          component={InputField}
        />
        <Field
          name="categories"
          label="Categories"
          component={InputField}
        />
        <Field
          name="content"
          label="Content for Post"
          component={InputField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger secondary-btn">Cancel</Link>
      </form>
      );
  }
}

export default PostsNew;
