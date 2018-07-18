handleAddBook() {



}

handleRemoveBook(book) {
  this.setState((currentState) => {
    return {
      books: currentState.books.filter((book) => book !== book)
    }
  })
}


function activeFriends(props) {
  return (


  )


}

function inactiveFriends(props) {


}


<activeFriends
list={ths.state.friends.filter((friend)=>friend.active ===true)}
/>
<inactiveFriends
list={ths.state.friends.filter((friend)=>friend.active ===false)}
/>


<BookShelf shelf = 'Currently reading'/>
  <Book books: {props.state.books}/>
<BookShelf shelf = 'Want to read' />
  <Book books: {props.state.books}/>
<BookShelf shelf = 'Read'/>
  <Book books: {props.state.books}/>


  componentDidMount() {
  BooksAPI.getAll().then(books => console.log(books))
  let query = 'react';
  BooksAPI.search(query).then(books => console.log(books))
}
}
