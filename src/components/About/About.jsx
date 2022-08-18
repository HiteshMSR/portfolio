import React from 'react';
import './About.css';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink'

function About() {
    return(
    <div className='section-container'> 
        <h1>I am the About Page</h1>
        <Header heading="About Me" details="React Developer"></Header>
        <FooterLink phrase="Check out My " link=" Projects!" toadress="/projects"></FooterLink>
    </div>
    )
}

export default About;