import React from 'react'
import './index.css'

class Book extends React.Component {

  render() {

    const { books, updateBooks } = this.props

    return (
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className='book-cover' style={{
                       width: 128, height: 193,

                       /* Set placeholder image for the books without a thumbnail */
                       backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : "http://via.placeholder.com/128x193?text=No%20Image"})`
                }}/>
                  <div className="book-shelf-changer">
                    <select
                      onChange={(event) => updateBooks(book, event.target.value)}
                      value={book.shelf}>
                      <optgroup label="Move to:">
                        <option value="currentlyReading" disabled={book.shelf === 'currentlyReading'}>Currently Reading</option>
                        <option value="wantToRead" disabled={book.shelf === 'wantToRead'}>Want to Read</option>
                        <option value="read" disabled={book.shelf === 'read'}>Read</option>
                        <option value="none" disabled={book.shelf === 'none' || !book.shelf}>None</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
              </div>
              <div className="book-title">{book.title}
              </div>
              <div className="book-authors">{book.authors}
              </div>
          </li>
        ))}
      </ol>
    )
  }
}


export default Book
