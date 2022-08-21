import React from 'react';
import './Contact.css';
import Header from './../Header/Header';
import FooterLink from './../FooterLink/FooterLink';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import web from './../../assets/web.png';


function Contact() {
    return(
    <div className='section-container'> 
        <Header heading="Get in touch." details="Feel free to drop a mail."></Header>
       <div className="contact-form-container">
        <form className="contact-form"  action="https://formspree.io/f/xgeqeqab"
  method="POST">
            <input type="email" name="email" placeholder="your email ID" className="input-box email-input"></input>
            <textarea type="text" placeholder="your Message" name="message" className="input-box body-input"></textarea>
            <button type="submit" className="contact-btn">Send Email</button>
        </form>
       </div>
        <div className='social-icons-container'>
            <a href="https://github.com/HiteshMSR" className='social-icon'><img src={github} alt="social" /></a>
            <a href="https://www.linkedin.com/in/hitesh-msr/" className="social-icon"><img src={linkedin} alt="social" /></a>
            <a href="https://msrhitesh-portfolio.netlify.app/" className="social-icon"><img src={web} alt="social" /></a>
        </div>

<FooterLink phrase="Read more " link=" about me" toadress="/about"></FooterLink>
    </div>
    )
}

export default Contact;