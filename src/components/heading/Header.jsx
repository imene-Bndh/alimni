import React, { useState } from 'react'
import { FaBars,FaTimes } from 'react-icons/fa';
import Head from './Head'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <div>
            <Head />
            <header>
                <nav className='flexSB'>
                    <ul
                        className={isClicked ? 'mobile-nav' : 'flexSB'}
                        onClick={() => setIsClicked(false)}
                    >
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                    </ul>
                    
                    <button className="start"><Link to="/mycourses">MY COURSES</Link> </button>                   
                    <button className='mobile-nav-button' onClick={()=>{setIsClicked(!isClicked)}}>
                        {!isClicked? <i> <FaBars/> </i>:<i> <FaTimes/> </i>}
                    </button>
                </nav>
            </header>
        </div>
    )
}

export default Header
