import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import SearchQuery from './searchQuery.js'
import MainPage from './mainPage.js'
import './App.css'

class BooksApp extends React.Component {

  state = {
     books: []
  }

/* API requests are to be used with componentDidMount */
  componentDidMount() {
    this.fetchBooks();
  }


/* API call to retrieve books from backend server and update the book array in the state */
  fetchBooks() {
    BooksAPI.getAll().then((books) => {
        this.setState({ books })
        console.log(this.state)
    })
  }

/* Enable movement of books to and from shelves and search page by updating the shelf of that specific book and reloading all books */
  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
      this.fetchBooks()
      console.log(`"${book.title}" now on shelf " ${shelf}"`)
    })
    .catch(error => console.log(error))
  }


  render() {
    return (
      <div className="app">
          <Route exact path="/" render={() =>
            <MainPage
              books={this.state.books}
              updateBooks={this.updateBooks}
            />
          }/>
          <Route path="/search" render={() =>
            <SearchQuery
              books={this.state.books}
              updateBooks={this.updateBooks}
            />
          }/>
      </div>
    )
  }
}

export default BooksApp
