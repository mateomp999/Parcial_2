
import { useState } from "react";
import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';

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

    /*const handleClick = (book) => {
        {setSpecial(book.id)};
      };*/

    return (
        <div class="grid grid-cols-2 divide-x">
            <div>{books.map((book) => (
                <Button >
                    <h1>{book.image}</h1>
                    <h1>{book.name}</h1>
                    <h1>{book.isbn}</h1>
                </Button>
            ))}</div>

            <div>{special.name}</div>
        </div>
      );
    }
    
 