import React from 'react';
import './Projects.css'

import Header from './../Header/Header';
import FooterLink from './../FooterLink/FooterLink';
import {projectsData} from './../../assets/projectsData';
import ProjectCard from './ProjectCard';

function Projects() {
    return(
    <div className='section-container'> 
        <Header heading="My Projects." details="Here are the few cool things i've worked on, do check them out!"></Header>
        <div className="project-cards-container">
            
           { projectsData.map(({projectName, 
                projectDescription,
                imageUrl,
                videoUrl,
                projectUrl }) =>
                {
                    return <ProjectCard
                    projectName ={projectName}
                projectDescription ={projectDescription}
                imageUrl={imageUrl}
                videoUrl={videoUrl}
                projectUrl={projectUrl} />
                })}

         
            

        </div>
        <FooterLink phrase="check Out " link=" my skills!" toadress="/skills"></FooterLink>
    </div>
    )
}

export default Projects;