import React from 'react'
import './App.css'
import Header from './components/heading/Header'
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Courses from './components/courses/Courses';
import MyCourses from './components/courses/MyCourses';
import Watch from './components/watch/Watch';



const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/mycourses" element={<MyCourses />} />
        <Route path="/watch/:videoId" element={<Watch />} />
      </Routes>
    </div>
  )
}

export default App
