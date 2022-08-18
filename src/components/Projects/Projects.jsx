import React from 'react';
import './Projects.css'

import Header from './../Header/Header';
import FooterLink from './../FooterLink/FooterLink';

function Projects() {
    return(
    <div className='section-container'> 
        <Header heading="My Projects." details="Here are the few cool things i've worked on, do check them out!"></Header>

        <FooterLink phrase="check Out " link=" my skills!" toadress="/skills"></FooterLink>
    </div>
    )
}

export default Projects;