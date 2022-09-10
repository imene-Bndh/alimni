import React from 'react'
import './Hero.css'
import { FaLongArrowAltRight } from 'react-icons/fa';

const Hero = () => {
    return (
        <div>
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div id='heading'>
                            <h3>WELCOM TO EDUTUBE</h3>
                            <h1>Youtube Courses Tracker</h1>
                        </div>
                        <p>
                            This website is to help you track your youtube learning progress, you can search from our proposed list or you can link your own youtube course.
                        </p>
                        <button >VIEW COURSES<i><FaLongArrowAltRight /></i></button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
