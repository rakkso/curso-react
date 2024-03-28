import React from 'react'
import { DcPage, MarvelPage } from '../pages'
import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from 'react-router-dom'

export const HeroesRoutes = () => {
  return (
    
    <>
    <Navbar/>
    <Routes>
        <Route path="marvel" element={<MarvelPage/>}/>
        <Route path="dc" element={<DcPage/>}/>
        <Route path="/" element={<Navigate to="/marvel" />}/>
        
    </Routes>
    </>
  )
}
