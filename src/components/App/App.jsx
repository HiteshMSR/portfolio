import React from 'react';
import './App.css';
import { BrowserRouter, Routes,Route, Navigate, useNavigate} from 'react-router-dom';
import Home from './../Home/Home';
import About from './../About/About';
import Projects from './../Projects/Projects' ;
import Skills from './../Skills/Skills';
import Contact from './../Contact/Contact' ;
import NavBar from './../NavBar/NavBar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import AddIcon from '@mui/icons-material/Add';
import {useState} from 'react';

import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';




const App= () => {
    const navigate=useNavigate();
  
    return(
        <>
        <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"#00a1bd" }}>
      <Toolbar  style={{justifyContent:"right", marginRight:15 }} >
          <Button  style={{ marginRight:10}}color="inherit" onClick={()=>navigate("/")} >Home</Button>
          <Button style={{ marginRight:10}} color="inherit" onClick={()=>navigate("/about")} >About</Button>
          <Button style={{ marginRight:10}} color="inherit" onClick={()=>navigate("/projects")} >Projects</Button>
          <Button style={{marginRight:10}} color="inherit" onClick={()=>navigate("/skills")} >Skills</Button>
          <Button style={{marginRight:10}} color="inherit" onClick={()=>navigate("/contact")} >Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
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