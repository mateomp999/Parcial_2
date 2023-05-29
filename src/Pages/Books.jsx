
import { useState } from "react";
import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { FormattedMessage } from "react-intl";

export default function Books() {
    const [books, setBooks] = useState([]);
    const [special, setSpecial] = useState([]);
  
    useEffect(() => {
      const URL = "http://localhost:3000/books";
      fetch(URL)
        .then((data) => data.json())
        .then((data) => {
          setBooks(data);
        });
    }, []);

    const handleClick = (book) => {
        
            const URL = "http://localhost:3000/books/"+book.id;
            fetch(URL)
              .then((data) => data.json())
              .then((data) => {
                setSpecial(data);
              })
              .catch(error => {
                console.error(error);
              });
          
      };

    return (
        <div class="grid grid-cols-2 divide-x">
            <div class="card">{books.map((book) => (
                <Button onClick={() => handleClick(book)} >
                    <img src={book.image} />
                    <h1>{book.name}</h1>
                    <h1>{book.isbn}</h1>
                </Button>
            ))}</div>

            <div>{special && 
            <p> <FormattedMessage id="ISBN"/> : {special.isbn}
            <p> <FormattedMessage id="Author"/> : {special.author}</p>
            <p> <FormattedMessage id="Publisher"/> : {special.publisher}</p>
            <p> <FormattedMessage id="Genre"/> : {special.gender}</p>
            <p> <FormattedMessage id="Year"/> : {special.year}</p>
            <p> <FormattedMessage id="Price"/> : {special.price}</p>
            <p> <FormattedMessage id="Summary"/> : {special.summary}</p>
            </p> 
            }</div>
        </div>
      );
    }
    
 