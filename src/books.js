import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

function Book (props) {



  return (
    <ol className="books-grid">
    {props.books.map((book) => (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className='book-cover' style={{
                   width: 128, height: 193,
                   backgroundImage: `url(${book.imageLinks.smallThumbnail})`
            }}/>
              <div className="book-shelf-changer">
                <select
                  onClick={(event) => props.updateBooks(book, event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading" disabled={book.shelf === 'currentlyReading'}>Currently Reading</option>
                    <option value="wantToRead" disabled={book.shelf === 'wantToRead'}>Want to Read</option>
                    <option value="read" disabled={book.shelf === 'read'}>Read</option>
                    <option value="none" disabled={book.shelf === 'none'}>None</option>
                  </select>
              </div>
              </div>
            <div className="book-title">{book.title}
            </div>
          <div className="book-authors">{book.authors.join(', ')}
          </div>
        </div>
      </li>
    ))}
    </ol>

  )
  }

Book.propTypes = {
  books: PropTypes.array.isRequired,
  updateBooks: PropTypes.func.isRequired
}

export default Book
