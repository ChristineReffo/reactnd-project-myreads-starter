import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './books.js'
import './index.css'
import './App.css'

class SearchQuery extends React.Component {

  state = {
    query:'',
    searchedBooks: []
  }


  searchBook(query) {
    if(query) {
      BooksAPI.search(query)
      .then((searchedBooks) => {
        console.log(searchedBooks)

        if (!searchedBooks || "error" in searchedBooks) {
          this.setState({
            // query: query,
            searchedBooks: []
          })
        } else {
          searchedBooks.map(searchedBook => {
            for (let b of this.props.books) {
              if (b.id === searchedBook.id) {
                searchedBook.shelf = b.shelf
              }
            }
            if (!searchedBook.shelf) {
              searchedBook.shelf = "none"
            }
            return searchedBook
          })

          this.setState({ searchedBooks })
        }
      })
    }
  }

  updateQuery = (query) => {
    let trimmedQuery = query.trim()
    if(trimmedQuery) {
      this.setState({ query: query })
      this.searchBook(trimmedQuery)
    } else {
      this.setState({
        searchedBooks: [],
        query: ''
      })
    }
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {

    const { query } = this.state

    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/"className="close-search" >Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <Book
              books={this.state.searchedBooks}
              updateBooks={this.props.updateBooks}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SearchQuery
