import React from 'react';
import './Skills.css';
import Header from '../Header/Header';

import FooterLink from '../FooterLink/FooterLink';
import {skillList} from './../../assets/skillsData';
import SkillCard from './SkillCard';



function Skills() {
    return(
    <div className='section-container'> 
        <Header heading="My Skills" details="Passionate about new technologies, I keep exploring stuff. Here is the list of technologies"/>
        <div className='skill-card-container'>
           
           {skillList.map(({skillName,skillUrl})=>{
            return <SkillCard skillName={skillName} skillUrl={skillUrl} />
        }
            )}
           
           
        </div>
        <FooterLink phrase="Get in " link="touch." toadress="/contact"></FooterLink>
    </div>
    )
}
export default Skills;