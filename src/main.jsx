import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
// import App from './App.jsx'
import Navbar from './Pages/Navbar.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx';
import Services from './Pages/Services.jsx'
import Skills from './Pages/Skills.jsx'
import Project from './Pages/Project.jsx'
import Contact from './Pages/Contact.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Project />
      <Contact />
    </BrowserRouter>
  </StrictMode>,
)
