import React, { useState, useEffect } from "react";
import Book from "../components/Book";
import data from "../data/dummy-data.json";
import {Button} from "react-bootstrap"

export default function BookList() {
  const [books, setBooks] = useState(data);

  function upvote(book){
    let resultList = books.filter(p=>p!==book)
    book.likes+=1
    resultList=[...resultList, book]
    resultList.sort((a, b)=>b.likes-a.likes)
    setBooks(resultList)
  }

  useEffect(()=>{
      let resultList = books
      resultList.sort((a, b) => b.likes-a.likes)
      setBooks(resultList)
  }, [])

  return (
    <>
      {console.log(books)}
      {books.map((book) => (
        <>
          <Book book={book} />
          <Button variant="success" onClick={()=> upvote(book) }>{book.likes}</Button>
          <hr/>
        </>
      ))}
    </>
  );
}
