import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Header from './header.js'
import Book from './books.js'
import escapeRegExp from 'escape-string-regexp'
import sortBy from'sort-by'
import './index.css'
import './App.css'

class SearchQuery extends React.Component {

  state = {
    query:'',
    books: []
  }


// showing contacts needs to be mapped over from book.js line 11, but in the search page
// shelf needs to be up to date on all books in the search page and those already on shelves (shelveSync)
// if search throws error? suggest search terms, also is the match.test(book.title || book.authors correct?)

searchQuery = (query) => {
  BooksAPI.search(query).then(books => {
    if (books.error) {
      this.setState({ query: '', books: [] })
    } else {
      this.setState({ books })
    }
  })

}

updateQuery = (query) => {
  this.setState({ query: query.trim() })
}

render() {

  let showingBooks
  if (this.state.query) {
    const match = new RegExp(escapeRegExp(this.state.query), 'i')
    showingBooks = this.state.books.filter((book) => match.test(book.title || book.authors ))
  } else {
    showingBooks = this.state.books
  }
// still need to pass it into the mapping over array

showingBooks.sort(sortBy('book.title'))

  return(
    <div>
    <Header/>
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/"className="close-search" >Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author"
          value={this.props.query}
          onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
        <Book
          // showingBooks = {this.state.books.filter((book) => match.test(book.title || book.authors ))}
          shelf= 'none'
          />
      </div>
    </div>
    </div>

  )
  }

}

export default SearchQuery
