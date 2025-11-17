import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";
import "../styles/AddBook.css";



export default function AddBook() {
    const [form, setForm] = useState({
        title: "", author: "", category: "",
        description: "", rating: 3
    });
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function validate() {
        const e = {};
        if (!form.title.trim()) e.title = "Title required";
        if (!form.author.trim()) e.author = "Author required";
        if (!form.category.trim()) e.category = "Category required";
        return e;
    }
    function onSubmit(e) {
        e.preventDefault();
        const eobj = validate();
        setErrors(eobj);
        if (Object.keys(eobj).length) return;
        const newBook = { ...form, id: Date.now().toString() };
        dispatch(addBook(newBook));
        // after submission, redirect to Browse Books showing All
        navigate('/books/All');
    }
    return (
        <div className="addbook">
            <h2>Add a Book</h2>
            <form onSubmit={onSubmit} className="form">
                <label>Title</label>
                <input value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })} />
                {errors.title && <small className="err">{errors.title}</small>}
                <label>Author</label>
                <input value={form.author}
                onChange={(e) => setForm({ ...form, author: e.target.value })} />
                {errors.author && <small className="err">{errors.author}</small>}
                <label>Category</label>
                <input value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })} />
                {errors.category && <small className="err">{errors.category}</small>}
                <label>Description</label>
                <textarea value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })} />
                <label>Rating</label>
                <input type="number" min="0" max="5" step="0.1" value={form.rating}
                    onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })} />
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}
