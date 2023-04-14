import React, { Component } from "react"
import './App.css';
import Heading from './components/Heading'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className='content'>
      <Heading />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
