import React from 'react';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './../Home/Home';
import About from './../About/About';
import Projects from './../Projects/Projects' ;
import Skills from './../Skills/Skills';
import Contact from './../Contact/Contact' ;
import NavBar from './../NavBar/NavBar'

const App= () => {
    return(
        <>
            <div>
                <NavBar />
            </div>
            <div>
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills"  element={<Skills />} />
                <Route path="/contact"  element={<Contact />} />
             </Routes>
        </div>
        </>
    );
};

export  default App;