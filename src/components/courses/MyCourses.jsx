import React from 'react'
import courses from "../../data.json"
import Course from './Course'
import "./Courses.css"

const MyCourses = () => {
    return (
        <div>
            <div className="coursesContainer">
                <h1 className="coursesTitle">My Cources</h1>
                <div className="courses">
                    {courses && courses.map(c => { 
                        if(c.started === true){return(<Course data={c} key={c.id} />) }
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default MyCourses
