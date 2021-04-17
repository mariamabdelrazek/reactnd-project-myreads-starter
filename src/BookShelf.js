import React, { Component } from "react";
import BookCard from "./BookCard";

class Bookshelf extends Component {
  render() {
    const { books, title } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <BookCard book={book} updateBook={this.props.updateBook} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
