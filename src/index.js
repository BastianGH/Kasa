import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
        <main>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="about" Component={About} />
          <Route path="logement" Component={Logement} />
        </Routes>
      </main>           
      <Footer /> 
    </Router>
  </React.StrictMode>
);

