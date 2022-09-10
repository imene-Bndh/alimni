import React from 'react'
import Courses from '../courses/Courses'
import Hero from './hero/Hero'

const Home = () => {
    return (
        <div className="home">
            <Hero/>
            <Courses/>
        </div>
    )
}

export default Home
