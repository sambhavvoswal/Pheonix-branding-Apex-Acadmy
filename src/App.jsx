import React, { useState, useCallback } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Loader from './Components/Loader'

const App = () => {
  const [loading, setLoading] = useState(true)

  const handleLoaderDone = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <BrowserRouter>
      {loading && <Loader onComplete={handleLoaderDone} />}
      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App