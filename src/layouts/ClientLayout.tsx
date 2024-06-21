import { Header } from '../components/HeaderClient'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const ClientLayout: React.FC = () => {
  return (
    <>
      <div className=' flex flex-col min-h-dvh'>
        <Header />
        <main className=' flex-1 mt-20'>
          <Outlet />
        </main>
        <footer>
          <p>Footer</p>
        </footer>
      </div>
    </>
  )
}
