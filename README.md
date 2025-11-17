 One Stop Library

A simple online library web application built using Vite, React, React Router, and Redux Toolkit.
Users can browse books, filter by category, view details, and add new books through a form with validation.
This project is designed for beginner-friendly learning and meets the full requirements of the Module 5 React Assignment.

 Features

 Home Page

Welcome message

List of book categories

Displays 3 popular books

Navigation bar with links: Home, Browse Books, Add Book

🔍 Browse Books Page

Displays all books using dummy data

  Dynamic category filtering (/books/:category)

  Search by title or author

  Each book card links to its details page

 Book Details Page

  Dynamic URL: /book/:id

  Shows book title, author, description, rating, and category

  “Back to Browse” link

 Add Book Page

  Form to add a new book

  Redux Toolkit stores the new book

  Form validation for all required fields

After submission:

  Adds new book to the top of the list

  Redirects to /books/All

404 Page

  Shows “Page Not Found”

  Displays wrong route URL

  Navbar is not shown on this page

  Link to return Home

Tech Stack
  Technology	         Purpose
  Vite	                 Fast development environment
  React	                 Component-based UI
  React Router DOM	     Page navigation & dynamic routes
  Redux Toolkit	         State management for books
  CSS	                 Basic styling, clean and simple
  JavaScript (ES6)	     Logic & interactivity

Installation & Setup
   Clone the Repository
  git clone https://github.com/ShivamSwaroop/library--system.git
  cd library--system

   Install Dependencies
    npm install

   Start Development Server
    npm run dev

   Open in Browser
    by clicking on the link