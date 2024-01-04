import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './homePage'
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'

export const MainApp = () => {
  return (
    <>
    
     <h1>MainApp</h1>
     <hr/>

     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      {/* <Route path="/*" element={<LoginPage/>}/> Todo lo lo definido a LoginPage pero sin navegación y en la siguente con navegación, cambia la url del navegador*/ }
      <Route path="/*" element={<Navigate to="/about"/>} /> 
     </Routes>
    </>
  )
}
