import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import * as BooksAPI from "./BooksAPI";

class Search extends Component {
  state = {
    query: "",
    books: [],
  };

  updateQuery = (query) => {
    this.setState(() => ({ query: query }));
    BooksAPI.search(query.trim()).then((books) => {
      this.setState({ books: [] });
      if (books !== undefined && books.length > 0)
        this.setState({
          books: books.map((b) => {
            let shelfBook = this.props.books.find((book) => book.id === b.id);
            if (shelfBook) {
              return shelfBook;
            } else {
              b.shelf = "none";
              return b;
            }
          }),
        });
    });
  };

  render() {
    const books = this.state.books;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
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

export default Search;
