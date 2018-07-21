import React from 'react'
import Header from './header.js'
import BookShelf from './Shelf.js'
import Book from './books.js'
import Footer from './footer.js'

class MainPage extends React.Component {


  render() {

    const { books } = this.props

    return(

      <div>
        <Header/>
        <BookShelf shelf = 'Currently reading'/>
            <Book
              books={books.filter((book)=>book.shelf==='currentlyReading')}
              updateBooks={this.props.updateBooks}
            />
        <BookShelf shelf = 'Want to read'/>
            <Book
              books={books.filter((book)=>book.shelf==='wantToRead')}
              updateBooks={this.props.updateBooks}
            />
        <BookShelf shelf = 'Read'/>
            <Book
              books={books.filter((book)=>book.shelf==='read')}
              updateBooks={this.props.updateBooks}
            />
        <Footer/>
        )}/>
      </div>

    )
  }
}

export default MainPage
