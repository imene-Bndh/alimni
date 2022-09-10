import React from 'react';
import { useDispatch } from "react-redux";
import { startCourse } from '../../redux/ToDoActions'
import { Link } from 'react-router-dom'

const Course = ({ data }) => {
    const imgPath = "/coursesImgs/"
    const dispatch = useDispatch(); // dispatch info state
    return (
        <div className="course col-3">
            <img src={imgPath + data.img} alt={imgPath + data.img} className="courseImg" />
            <h2>{data.name}</h2>
            <div className="info">
                <h5>{data.author}</h5>
                <h5 className="time">{data.time}</h5>
            </div>
            <button
                className="startCourse"
                onClick={(e) => {
                    data.started = true;
                    dispatch(startCourse(data));
                }}
            >
                <Link to={{pathname: "/watch/"+data.id}}>{data.started ? "CONTINUE" : "START"}</Link>
                {/* <Link to="/watch">{data.started ? "CONTINUE" : "START"}</Link> */}

            </button>

        </div>
    )
}

export default Course
