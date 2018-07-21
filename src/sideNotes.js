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





  updateQuery=(query)=>{
      this.setState({query:query})
      if(query){
        BooksAPI.search(query.trim(),5).then((books)=>{
          if(books.length){
            books.forEach((book,index)=>{
                          let matchBook=this.props.books.find((b)=>b.id===book.id);
              book.shelf=matchBook? matchBook.shelf:'none';
              books[index]=book;
            });
          this.setState({
            searchBook:books
          })
        }
        else{
          this.setState({searchBook:[]})
        }

      });
      }
      else{
        this.setState({searchBook:[]})
      }

    }
    componenttWillUnmount(){
      this.updateQuery('')
    }
