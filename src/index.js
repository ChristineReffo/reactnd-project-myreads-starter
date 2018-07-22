import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import './index.css'

/* Wrapping the App component into Browser Router in order to allow for a dynamic URL and bookmarkability */

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'))
