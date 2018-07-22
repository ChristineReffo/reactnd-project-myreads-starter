import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {

  render() {

    return (

/* Green button link created with react-router-dom to allow for dynamic URL when going into the search page */

    <div className="open-search">
      <Link to='/search'>Add a book</Link>
    </div>

    )
  }
}


export default Footer
