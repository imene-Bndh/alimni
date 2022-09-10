import React from 'react'
import Course from './Course'
import "./Courses.css"
import { useSelector } from "react-redux";

const Courses = () => {
    const courses = useSelector((state) => state.courses);

    return (
        <div className="coursesContainer">
            <h1 className="coursesTitle">Cources</h1>
            <div className="courses">
                {courses && courses.map(c => { return (<Course data={c} key={c.id} />) })}
            </div>
        </div>
    )
}

export default Courses
