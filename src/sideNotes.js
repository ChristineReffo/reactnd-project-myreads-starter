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
list={this.state.friends.filter((friend)=>friend.active ===true)}
/>
<inactiveFriends
list={ths.state.friends.filter((friend)=>friend.active ===false)}
/>




}
}
