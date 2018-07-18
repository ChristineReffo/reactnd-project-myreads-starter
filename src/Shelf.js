import React from 'react'
import './App.css'


class BookShelf extends React.Component {
  render() {

    return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.name}</h2>
              <div className="bookshelf-books">
              </div>
            </div>
  )
}
}

export default BookShelf
