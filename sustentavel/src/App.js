import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import  Header  from './components/Header/Header';
import  Home  from './components/Home/Home';
import  Tips  from './components/Tips/Tips';
import  About  from './components/About/About';
import Comments from './components/Comments/Comments';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/about" element={<About />} />
          <Route path="/comments" element={<Comments/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
