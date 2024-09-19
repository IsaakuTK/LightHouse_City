import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Dashboard } from '../pages'

export function AppRouter () {
  return (
    <Routes>
      <Route path='/LightHouse_City' element={<Dashboard />} />
      <Route path='/*' element={<p className='text-5xl p-5'>404</p>} />
    </Routes>
  )
}