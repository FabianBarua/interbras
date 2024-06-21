import React from 'react'
import ReactDOM from 'react-dom/client'

import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import { ClientLayout } from './layouts/ClientLayout'

import './index.css'
import { Home } from './pages/home'

const AllRoutes: React.FC = () => {
  const location = useLocation()
  return (
    <Routes location={location}>
      <Route element={<ClientLayout />}>
        <Route element={<Home />} path='/' />
      </Route>
    </Routes>
  )
}

document.addEventListener('DOMContentLoaded', function () {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Router>
        <AllRoutes />
      </Router>
    </React.StrictMode>
  )
} as EventListener)
