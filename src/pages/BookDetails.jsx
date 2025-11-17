import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/BookDetails.css";


export default function BookDetails() {
    const { id } = useParams();
    const book = useSelector((s) => s.books.items.find((b) => b.id === id));
    if (!book) return (
        <div className="details">
            <h3>Book not found</h3>
            <Link to="/books/All">Back to Browse</Link>
        </div>
    );
    return (
        <div className="details">
            <h2>{book.title}</h2>
            <p className="muted">by {book.author}</p>
            <p><strong>Category:</strong> {book.category}</p>
            <p><strong>Rating:</strong> star {book.rating}</p>
            <p className="desc">{book.description}</p>
            <Link to="/books/All">Back to Browse</Link>
        </div>
    );
}
