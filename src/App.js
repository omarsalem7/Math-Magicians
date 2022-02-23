import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

const App = () => (
  <Router>
    <Header />
    <h1>omar</h1>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/calculator" element={<Calculator />} />
        <Route exact path="/quote" element={<Quote />} />
      </Routes>
    </div>
  </Router>
);
export default App;
