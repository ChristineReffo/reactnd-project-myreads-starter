import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header.js'
import './index.css'
import './App.css'

class SearchQuery extends React.Component {

  state = {
    books: [],
    query:'',
    showSearchPage: true
  }

updateQuery = (query) => {
  this.setState({ query: query.trim() })
}

render() {

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
      </div>
    </div>
    </div>

  )
  }

}

export default SearchQuery
