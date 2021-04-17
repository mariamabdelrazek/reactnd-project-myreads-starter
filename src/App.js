import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from "./ListBooks";
import Search from "./Search";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: [],
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }));
    });
  }
  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((res) => {
      book.shelf = shelf;
      this.setState((state) => ({
        books: state.books.filter((b) => b.id !== book.id).concat([book]),
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks books={this.state.books} updateBook={this.updateBook} />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Search books={this.state.books} updateBook={this.updateBook} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
