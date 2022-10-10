import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Location from './pages/Location';
import Apropos from './pages/Apropos';
import Page404 from './pages/Page404';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./styles/kasa.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
      
      
        <Route path = "/" element ={<Home />} />
        <Route path = "/apropos" element ={<Apropos />} />
        <Route path = "location/:id" element ={<Location />} />
        <Route path = "*" element ={<Page404 />} /> 
      
      
    </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);


