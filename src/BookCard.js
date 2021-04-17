import React, { Component } from "react";

class BookCard extends Component {
  handleUpdateBook = (event) => {
    this.props.updateBook(this.props.book, event.target.value);
  };

  render() {
    const { book } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks
                  ? book.imageLinks.thumbnail
                    ? book.imageLinks.thumbnail
                    : ""
                  : ""
              })`,
            }}
          />
          <div className="book-shelf-changer">
            <select defaultValue={book.shelf} onChange={this.handleUpdateBook}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors &&
            book.authors.map((author) => <p key={author}>{author}</p>)}
        </div>
      </div>
    );
  }
}

export default BookCard;
