import { useState, useEffect } from "react";
import BookCreate from "./HandleForms/BookCreate";
import BookList from "./HandleForms/BookList";
import axios from "axios";

function App() {
 const [books, setBooks] = useState([]);

 const fetchBooks= async()=>{
  const response = await axios.get("http://localhost:3001/books")
  setBooks(response.data);
 };
 useEffect(()=>{
  fetchBooks();
 },[])
 const hanldeCreateBook = async(title) =>{

  const response = await axios.post("http://localhost:3001/books",{
    title
  });
   const updateBook = [...books, response.data]

   setBooks(updateBook);
 }
 const editBookById = async(id,newtitle) =>{

  const response = await axios.put(`http://localhost:3001/books/${id}`,{
    title:newtitle
  });

  const updateBooks = books.map((book)=>{
    
    if(book.id === id){
      return {...book, ...response.data};
    }
    return book;

  });
  setBooks(updateBooks)
 }
 const deleteBookById = async(id) =>{
  await axios.delete(`http://localhost:3001/books/${id}`);

  const updateBooks = books.filter((book)=>{
    return book.id !==id;
  });
  setBooks(updateBooks)
 }
  return (
    <div className="app">
      <h2>Reading List</h2>
      <BookList onEdit={editBookById} books = {books} onDelete={deleteBookById}/>
      <BookCreate onCreate={hanldeCreateBook}></BookCreate>
      
    </div>
  );
}

export default App;
