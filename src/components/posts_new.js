import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../actions/index';

// TODO: consider if the form HOC is not a component?
class PostsNew extends Component {
  onSubmit = values => {
    this.props.createPost(values, () => {
      // Note: history prop provided by react-router
      this.props.history.push('/');
    });
  }

  renderField (field) {
    const {
      label,
      input: { name },
      meta: { touched, error }
    } = field;

    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          className="form-control"
          type="text"
          {...field.input}
        />
        <span className="text-help">
          {touched ? error : ''}
        </span>
      </div>
    )
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name="title"
          label="Title for Post"
          component={this.renderField}
        />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />
        <Field
          name="content"
          label="Content for Post"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger secondary-btn">Cancel</Link>
      </form>
      );
  }
}

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
