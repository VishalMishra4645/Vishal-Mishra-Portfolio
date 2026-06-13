import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
// import App from './App.jsx'
import Navbar from './Pages/Navbar.jsx'
import Home from './Pages/Home.jsx'
// import About from './About/About.jsx';
// import Services from './Services/Services.jsx'
// import Skills from './Skills/Skills.jsx'
// import Project from './Project/Project.jsx'
// import Contact from './Contact/Contact.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={<About />} /> */}
        {/* <Route path='/' element={<Services />} /> */}
        {/* <Route path='/' element={<Skills />} /> */}
        {/* <Route path='/' element={<Project />} /> */}
        {/* <Route path='/' element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
