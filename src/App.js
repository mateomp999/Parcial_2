import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from "./Pages/LoginPage";
import Books from "./Pages/Books";
import {BrowserRouter} from 'react-router-dom';
import {Routes,Route} from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage/>} />
        <Route exact path="/books" element={<Books/>} />
        <Route path="*" element="Not Found" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


