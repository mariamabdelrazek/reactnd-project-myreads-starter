import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

class ListBooks extends Component {
  render() {
    const { books } = this.props;
    const currentlyReading = [];
    const wantToRead = [];
    const read = [];
    for (let book of books) {
      switch (book.shelf) {
        case "currentlyReading":
          currentlyReading.push(book);
          break;
        case "wantToRead":
          wantToRead.push(book);
          break;
        case "read":
          read.push(book);
          break;
        default:
          break;
      }
    }
    return (
      <div className="listBooks">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf
                title="Currently Reading"
                books={currentlyReading}
                updateBook={this.props.updateBook}
              />
              <BookShelf
                title="Want to Read"
                books={wantToRead}
                updateBook={this.props.updateBook}
              />
              <BookShelf
                title="Read"
                books={read}
                updateBook={this.props.updateBook}
              />
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ListBooks;
