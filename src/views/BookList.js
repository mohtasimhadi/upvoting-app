import React, { useState, useEffect } from "react";
import Book from "../components/Book";
import data from "../data/dummy-data.json";
import {Button} from "react-bootstrap"

export default function BookList() {
  const [books, setBooks] = useState(data);
  return (
    <>
      {console.log(books)}
      {books.map((book) => (
        <>
          <Book book={book} />
          <Button variant="success">
            <p>{book.likes}</p>
          </Button>
          <hr />
        </>
      ))}
    </>
  );
}
