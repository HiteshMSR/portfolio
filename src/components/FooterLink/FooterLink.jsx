import React from 'react';
import './FooterLink.css';
import {Link} from 'react-router-dom';


function FooterLink({phrase,link,toadress}){

    return(
        <div className="footer-link"> 

        {phrase}
        
     <Link to={toadress} className='footer-link-element'>{link}</Link> 

        </div>
    )

}


export default FooterLink 