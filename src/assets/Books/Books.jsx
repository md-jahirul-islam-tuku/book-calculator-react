import React, { use } from "react";
import Book from "./book/Book";

const Books = ({ url, handleBookmark }) => {
  const books = use(url);
  const allBooks = books.books;
  return (
    <div>
      <h1 className="text-xl font-bold">Total book: {allBooks.length}</h1>
      <div className="py-4">
        {allBooks.map((book) => (
          <Book key={book.id} book={book} handleBookmark={handleBookmark}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
