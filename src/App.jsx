import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks.jsx";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
    
      <Navbar />

      <div style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BrowseBooks />} />
          <Route path="/books/:category" element={<BrowseBooks />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/add-book" element={<AddBook />} />

          {/* 404 Page  */}
          <Route path="*" element={<NotFoundWithoutNavbar />} />
        </Routes>
      </div>
    </>
  );
}

// Separate wrapper to hide Navbar on 404
function NotFoundWithoutNavbar() {
  return <NotFound />;
}
