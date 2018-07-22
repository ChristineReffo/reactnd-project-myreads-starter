# MyReads Project


## Table of Contents

* [Description](#description)
* [Getting Started](#getting-started)
* [Installation](#installation)
* [Instructions](#instructions)
* [Dependencies](#dependencies)
* [Contributing](#contributing)


## Description

This is a Udacity project built with React. A dynamic and interactive app allowing the user to manage books on three different bookshelves by adding new books, remove others or changing them to a different shelf.


## Getting started

### Installation

The code can be accessed, forked and cloned here:
https://github.com/ChristineReffo/reactnd-project-myreads-starter


To start the server:

* install all project dependencies with `npm install`
* start the development server with `npm start`

This will start the localhost:3000 in your browser automatically and the app will show.


### Instructions

Books can be added, removed or moved across three different bookshelves, by clicking on on the green button in the lower right corner of each book thumbnail. A dropdown menu will open, giving the choice to move a book to a different shelf:

* Currently Reading
* Want to Read
* Read
* None

The shelf this specific book is currently on, will not be available as an option. Setting the shelf to "none" will move it to the library page and off your shelf.

Clicking the green button with the plus-sign in the lower right corner of the app will lead you to a search page where books can be searched and via the drop down menu be added to one of the shelves (except shelf 'none', which is their current shelf)


#### Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.


## Dependencies

This game is built with the following code dependencies:
1. ES6
2. React
3. React Dom
4. React Router
5. Reac scripts
6. Bootstrap Create-react-app


### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## Contributing

This is a Udacity student project. Contributors are welcome to send pull requests, which will be considered once the project has been reviewed and it passed all requirements.


### Author

Original static code in OldApp.js: Udacity
Backend server: Udacity
React implementation: Christine Reffo


### License

This project is not licensed.





