import { useState } from 'react'
import { Routes, Route } from "react-router";
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Home from './components/Home/Home'
import ProjectInfo from './components/ProjectInfo/ProjectInfo';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='content-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:projectName" element={<ProjectInfo />} />
        </Routes>
      </div>
    </>
  )
}

export default App
