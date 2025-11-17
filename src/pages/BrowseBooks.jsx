import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import BookCard from "../components/BookCard";
import "../styles/BrowseBooks.css";
export default function BrowseBooks() {
    const { category } = useParams();
    const books = useSelector((s) => s.books.items);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const filtered = useMemo(() => {
        const cat = category || "All";
        return books.filter((b) => {
            const inCat = cat === "All" || b.category === cat;
            const matches = [b.title, b.author].join("").toLowerCase().includes(query.toLowerCase());
            return inCat && matches;
        });
    }, [books, category, query]);
    return (
        <div className="browse">
            <div className="browse-header">
                <h2>Browse Books {category ? `- ${category}` : ''}</h2>
                <div>
                    <input
                        placeholder="Search by title or author"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button onClick={() => navigate('/add-book')}>Add New</button>
                </div>
            </div>
            <div className="books-grid">
                {filtered.length === 0 ? (
                    <p>No books found.</p>
                ) : (
                    filtered.map((b) => <BookCard key={b.id} book={b} />)
                )}
            </div>
        </div>
    );
}