import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import homeAnime from './../../assets/home_anime.gif'

function Home(){
    return(
        <div className="home-container">
            <div className="header-text">
                <h1>Welcome to my Portfolio!</h1>
                <p>This is Hitesh , a Full Stack Developer</p>
            </div>
            <div className="head-btns">
                <Link to='/about' className='btn btn-white'>
                    <p className='btn btn-text'>Know More About Me</p>
                </Link>
                <Link to='/contact' className='btn btn-transparent'>
                    <p className='btn btn-text'>Connect With me</p>
                </Link>
            </div>
            <div className="splash-image">
                <img src={homeAnime} alt="animation" className='home_anime'></img>
            </div>

        </div>
    

    )
}

export default Home;