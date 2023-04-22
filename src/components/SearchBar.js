import { useState } from "react";
import './searchBar.css'

function SearchBar( {onSubmit}) {
    const [term, setTerm] = useState('')
  
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        onSubmit(term)
    }

    const handleChange = (event) =>{
        setTerm(event.target.value)
    }

    return (
      <div className="search-bar">
        <label>Enter Search Item</label>
        <form onSubmit = {handleFormSubmit} className="">
           <input value={term} onChange={handleChange}/>
        </form>
       
        
      </div>
    );
  }
  
  export default SearchBar;