import React from 'react'
import './App.css'
import Header from './Components/Commun/heading/Header'
import { Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
  )
}

export default App
