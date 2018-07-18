import React from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './books.js'
import BookShelf from './Shelf.js'
import Header from './header.js'
import './App.css'





// BooksAPI.update(book, shelf).then(() =>      console.log(`Moved "${book.title}" to "${shelf}" ID shelf`))




class BooksApp extends React.Component {

  state = {
     books: []
   }

  componentDidMount() {
      BooksAPI.getAll().then((books) => {
            this.setState({ books: books })
            console.log(this.state)
          })
      }

  /*  changeShelf = (book, shelf ) => {
     BooksAPI.update(book, shelf).then(response => {
       this.getBooksOnShelf();
     });
   }; */




    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false

  render() {
    return (
      <div className="app">
      <Header/>
        <BookShelf
          shelf = 'Currently reading'/>
          <Book
            books={this.state.books.filter((book)=>book.shelf==='currentlyReading')}/>
        <BookShelf shelf = 'Want to read'/>
          <Book
            books={this.state.books.filter((book)=>book.shelf==='wantToRead')}/>
        <BookShelf shelf = 'Read'/>
          <Book
            books={this.state.books.filter((book)=>book.shelf==='read')}/>
        </div>
    )
  }
}


export default BooksApp
