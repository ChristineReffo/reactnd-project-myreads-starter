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

// API requests are to be used with componentDidMount
  componentDidMount() {
    this.fetchBooks();
  }

// API call to retrieve books from backend server and update the book array in the state
  fetchBooks() {
    BooksAPI.getAll().then((books) => {
        this.setState({ books })
        console.log(this.state)
    })
  }

  // Function that enables dropdown menu to change the shelf books are placed in
  updateBooks = (book, shelf) => {
     BooksAPI.update(book, shelf).then(() => {
       this.fetchBooks()
       // book.shelf = shelf
       // console.log(`"${book.title}" now on shelf " ${shelf}"`);
       // // if(!this.state.books.find((b) => {b.id === book.id})) {
       // //   console.log(`Adding ${book.title} to state`)
       //   this.state.books.concat(book)
       // // }
       // this.setState({ books: this.state.books })
     }).catch(error => console.log(error));
   };


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
