import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import SearchQuery from './searchQuery.js'
import MainPage from './mainPage.js'
import './App.css'




class BooksApp extends React.Component {

  state = {
     books: [],
     query: '',

   }

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
       console.log(`"${book.title}" now on shelf " ${shelf}"`);
       this.fetchBooks();
     }).catch(error => console.log(error));
   };





  // updateQuery = (query) => {
  //   this.setState({ query: query.trim()
  //   })
  //   .then(this.updateQuery.bind(this))
  // }


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
            />
          }/>
      </div>
    )
  }
}
export default BooksApp
