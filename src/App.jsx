import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
// import About from './Components/About'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        {/* Your app content goes here */}
      </div>
    </BrowserRouter>
  )
}

export default App