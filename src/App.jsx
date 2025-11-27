import { useState } from "react";
import "./App.css";
import Books from "./assets/Books/Books";
import Navbar from "./assets/Navbar/Navbar";
import Sidebar from "./assets/Sidebar/Sidebar";

const url = fetch("books.json").then((res) => res.json());

function App() {
  const [books, setBooks] = useState([]);
  const handleBookmark = (book) => {
    setBooks([...books, book]);
  };
  const readBook = (id) => {
    setBooks(prev => prev.filter(book => book.id !== id));
  };
  return (
    <>
      <Navbar></Navbar>
      <main className="flex w-5/6 mx-auto">
        <div className="w-[70%] p-4">
          <Books url={url} handleBookmark={handleBookmark}></Books>
        </div>
        <div className="w-[30%] bg-gray-100">
          <Sidebar books={books} readBook={readBook}></Sidebar>
        </div>
      </main>
    </>
  );
}

export default App;
