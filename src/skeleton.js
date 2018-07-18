import React from 'react'
import Header from './header.js'
import BookShelf from './Shelf.js'
import Book from './books.js'


class Skeleton extends React.Component {

  render(props) {
    return(
      <div>
        <Header/>
          <BookShelf shelf = 'Currently reading'/>
            <Book/>
          <BookShelf shelf = 'Want to read' />
            <Book/>
          <BookShelf shelf = 'Read'/>
            <Book/>
          </div>

    )
  }
}

export default Skeleton
