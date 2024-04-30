import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginComponent from './LoginComponent/LoginComponent'
import SignUpComponent from './SigunUpComponent/SignUpComponent'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginComponent />} />
        <Route path='/register' element={<SignUpComponent />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
