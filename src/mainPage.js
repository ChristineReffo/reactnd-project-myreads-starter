import React from 'react'
import Header from './header.js'
import BookShelf from './bookShelf.js'
import Book from './books.js'
import Footer from './footer.js'

class MainPage extends React.Component {


  render() {

    const { books, updateBooks } = this.props

    return(

      <div>
        <Header/>
        <BookShelf shelf = 'Currently reading'/>
            <Book
              books={books.filter((book)=>book.shelf==='currentlyReading')}
              updateBooks={updateBooks}
            />
        <BookShelf shelf = 'Want to read'/>
            <Book
              books={books.filter((book)=>book.shelf==='wantToRead')}
              updateBooks={updateBooks}
            />
        <BookShelf shelf = 'Read'/>
            <Book
              books={books.filter((book)=>book.shelf==='read')}
              updateBooks={updateBooks}
            />
        <Footer/>
      </div>
    )
  }
}

export default MainPage
