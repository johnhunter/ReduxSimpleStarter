import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';

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

export default PostsNew;
