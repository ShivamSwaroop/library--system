import React from "react";
import { Link } from "react-router-dom";
import "../styles/BookCard.css";


export default function BookCard({ book }) {
    return (
        <div className="card">
            <h4>{book.title}</h4>
            <p className="muted">by {book.author}</p>
            <p className="muted">{book.category}</p>
            <p className="desc">{book.description.substring(0, 80)}
                {book.description.length > 80 ? "..." : ""}</p>
            <div className="card-bottom">
                <span> star {book.rating}</span>
                <Link to={`/book/${book.id}`}>View Details</Link>
            </div>
        </div>
    );
}
