import React, { useState, useEffect } from "react";
import Book from "../components/Book";
import data from "../data/dummy-data.json";

export default function BookList() {
  const [books, setBooks] = useState(data);
  return (
    <>
      {console.log(books)}
      {books.map((book) => (
        <>
          <Book book={book} />
          <button>
            <p>{book.likes}</p>
          </button>
          <hr />
        </>
      ))}
    </>
  );
}
