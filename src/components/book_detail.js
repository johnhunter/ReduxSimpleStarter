import React, { Component } from 'react';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started...</div>;
    }
    return (
      <div>
        <h3>Detail for:</h3>
        <div>{this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

export default BookDetail;
