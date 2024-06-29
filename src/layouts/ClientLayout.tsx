import { Header } from '../components/HeaderClient'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/FooterClient'

export const ClientLayout: React.FC = () => {
  return (
    <>
      <div className='  font-interbras bg-[#F2F2F2] flex flex-col min-h-dvh'>
        <Header />
        <main className=' flex-1 mt-20 flex flex-col'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
