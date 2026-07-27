import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Import BrowserRouter
import App from './App.jsx';
import './index.css';
import ScrollToTop from './components/ScrollToTop.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <ScrollToTop/>
      <App />
    </BrowserRouter>
 
);