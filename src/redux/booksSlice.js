import { createSlice } from "@reduxjs/toolkit";
import initialBooks from "../utils/books";


const booksSlice = createSlice({
    name: "books",
    initialState: {
        items: initialBooks,
    },
    reducers: {
        addBook: (state, action) => {
            // add new book to beginning
            state.items.unshift(action.payload);
        },
    },
});
export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
