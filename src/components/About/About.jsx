import React from 'react';
import './About.css';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink'

function About() {
    return(
    <div className='section-container'> 
        <Header heading="Hitesh Mada" details="React Developer | Full-Stack Developer"></Header>
        <div className="about-me-container">
            <div className="about-me-intro">
            <p>
                I'm a React Developer and extremely passionate towards developing websites. I'm well versed with React, React hooks, Javascript, HTML and CSS. Im Graduated as Computer Science Engineer from Ramaiah University in 2019, Since then, I've been working as Project Engineer for Wipro.
            </p>
            <p>
            In my free time, I like to play Table-Tennis, listen to music (and very early stage of learning piano), read and explore new stuff in tech and try out and spend time with friends and family.
            </p>
            </div>
            <div className="work-education">
                <div className="work">

                </div>

                <div className="education">
                </div>
            </div>
        </div>
        <FooterLink phrase="Check out My " link=" Projects!" toadress="/projects"></FooterLink>
    </div>
    )
}

export default About;