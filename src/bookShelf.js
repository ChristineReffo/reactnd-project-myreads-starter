import React from 'react'
import './App.css'

class BookShelf extends React.Component {

  render() {

    const { shelf } = this.props

    return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">{shelf}</h2>
              <div className="bookshelf-books">
              </div>
            </div>
    )
  }
}

export default BookShelf
