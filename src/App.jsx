import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar.jsx'
import React from 'react'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-row justify-center w-full'>
        <div className='w-[100%] h-[776px] [background:linear-gradient(240deg,rgba(39,245,111),rgba(19,110,52)_100%)]'>
          <Routes>
            <Route path="/" element={<Navbar />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
