import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
// import './index.css'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    { < Header /> }
    { <Home /> }
    { <Footer /> }
  </StrictMode>,
)
