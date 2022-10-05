import React from 'react';
import ReactDOM from 'react-dom/client';
// import Navbar from './components/Navbar';
//import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Apparts from './pages/Apparts';
import Apropos from './pages/Apropos';
import Page404 from './pages/Page404';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
      
      
        <Route path = "/" element ={<Home />} />
        <Route path = "/apropos" element ={<Apropos />} />
        <Route path = "apparts/:id" element ={<Apparts />} />
        <Route path = "*" element ={<Page404 />} /> 
      
      
    </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);


