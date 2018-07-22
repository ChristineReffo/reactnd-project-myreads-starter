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
    searchedBooks: []
  }


  // showing contacts needs to be mapped over from book.js line 11, but in the search page


  // You need to check whether a book that is returned from search(query) is the same as any of your books on your bookshelves. And if so, set the correct shelf state for that book. (Because the books returned from search(query) don’t know what shelf they are on).
  //
  // So all you need is a list of books in your library (which you get from getAll) and compare these books with the books retrieved from the search query.
  //
  // How can you check? One thing that is identical for books returned from a search and books in your library is the book id. In other words, you can compare the book ids, and if there is a match then assign the correct shelf.
  //
  // You can achieve this with various combinations of .map and .filter. So, for example, if you name the books returned from getAll() as “libraryBooks, you could do something like: map over your searched books, while filtering for which book ids in libraryBooks match the book ids in searched books, and if a match then assign that libraryBook shelf to the searched book.
  //
  // You can setState for this new list of books and pass them to your books.js, and all the books will have the correct book.shelf assigned to them.
  //
  // If you want to simplify things, you can do this without using “sort-by” or “escapeRegExp”.

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
            return searchedBook;
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
        <Header/>
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
