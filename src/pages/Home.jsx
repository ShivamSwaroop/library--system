import React from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import { useSelector } from "react-redux";
import "../styles/Home.css";


export default function Home() {
    const books = useSelector((s) => s.books.items);
    const popular = books.slice(0, 3);
    return (
        <div className="home-container">
            <h1>Welcome to your One Stop Library</h1>
            <p className="lead">Find books across categories — simple and easy.</p>
            <h3>Categories</h3>
            <div className="categories">
                <Link to="/books/Fiction">Fiction</Link>
                <Link to="/books/Non-Fiction">Non-Fiction</Link>
                <Link to="/books/Sci-Fi">Sci-Fi</Link>
                <Link to="/books/All">All</Link>
            </div>
            <h3>Popular Books</h3>
            <div className="popular-list">
                {popular.map((b) => (
                    <BookCard key={b.id} book={b} />
                ))}
            </div>
        </div>
    );
}
