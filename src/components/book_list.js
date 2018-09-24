import React, { Component } from 'react';


class BookList extends Component {
  renderList() {
    return this.props.books.map(book => (
      <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">
        {book.title}
      </li>
    ));
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

export default BookList;
