// File: src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800,       // animation duration
  once: true,          // only animate once when scrolled into view
  easing: 'ease-in-out'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
