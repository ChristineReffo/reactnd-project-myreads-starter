import React from 'react'
import Header from './header.js'
import BookShelf from './Shelf.js'
import Book from './books.js'
import Footer from './footer.js'

class MainPage extends React.Component {


  render() {


    return(

      <div>
        <Header/>
        <BookShelf shelf = 'Currently reading'/>
            <Book
              books={this.props.books.filter((book)=>book.shelf==='currentlyReading')}
              updateBooks={this.props.updateBooks}
            />
        <BookShelf shelf = 'Want to read'/>
            <Book
              books={this.props.books.filter((book)=>book.shelf==='wantToRead')}
              updateBooks={this.props.updateBooks}
            />
        <BookShelf shelf = 'Read'/>
            <Book
              books={this.props.books.filter((book)=>book.shelf==='read')}
              updateBooks={this.props.updateBooks}
            />
        <Footer/>
        )}/>
      </div>

    )
  }
}

export default MainPage
