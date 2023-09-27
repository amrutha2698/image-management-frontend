import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Login from './components/Login';
import Register from './components/Register';
import React from 'react';
import Home from './components/Home';
import AddImage from './components/AddImage';
import ViewImage from './components/ViewImage';
import Navbars from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbars/>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addImage" element={<AddImage />} />
          <Route path="/view-image" element={<ViewImage/>} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App
