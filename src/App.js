import React from 'react';
import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import LoginPage from "./Pages/LoginPage";
import Books from "./Pages/Books";
import {BrowserRouter} from 'react-router-dom';
import {Routes,Route} from 'react-router'
import en from './locales/en.json'
import es from './locales/es.json'
import {IntlProvider} from 'react-intl';

function App() {
  const [messages, setMessages] = useState(navigator.language === 'en'? en : es)
  return (
    <IntlProvider locale={navigator.language} messages={messages}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage/>} />
        <Route exact path="/books" element={<Books/>} />
        <Route exact path="/books/:booksId" element={<Books/>} />
        <Route path="*" element="Not Found" />
      </Routes>
    </BrowserRouter>
    </IntlProvider>
  );
}

export default App;


