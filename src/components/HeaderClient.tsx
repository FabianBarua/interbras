import { SwitchLanguage } from '../components/SwitchLanguage'
import { Logo } from '../components/Logo'
import React from 'react'
import { DondeEstamos } from './DondeEstamos'
import { ProductosHeader } from './ProductosHeader'
import { QuienesSomos } from './QuienesSomos'
import { useHeader } from '../hooks/useHeader'

export const Header: React.FC = (): JSX.Element => {
  const {
    dondeEstamosRef,
    productosRef,
    quienesSomosRef,
    selected
  } = useHeader()

  return (

    <header
      id='header-client'
      className={
      `
      shadow-xl  fixed w-full z-[999999]  flex flex-col h-20  pt-5  transition-all 
      ${
        selected !== null ? 'bg-interbrasGreen-500 text-white  h-96' : 'bg-white text-interbrasGreen-500  '
      }
      `
    }
    >
      <nav className='w-full flex'>
        <div className='flex-1 lg:block  hidden' />
        <ul className='flex  mx-auto justify-center items-center gap-14'>
          <li ref={dondeEstamosRef} className='  lg:block hidden'>
            <a href='#'>Donde estamos</a>
          </li>
          <li ref={productosRef} className='  lg:block hidden'>
            <a href='#' className=''>Productos</a>
          </li>
          <li>
            <a href='/'>
              <Logo />
            </a>
          </li>
          <li className='  lg:block hidden'>
            <a href='/'>Inicio</a>
          </li>
          <li ref={quienesSomosRef} className=' lg:block hidden'>
            <a href='#'>Quienes somos</a>
          </li>
        </ul>
        <div className='items-center flex-1  lg:flex hidden justify-end pr-12'>
          <SwitchLanguage />
        </div>
      </nav>
      <div className='  flex-1'>
        {
            selected === 'dondeEstamos' && <DondeEstamos />

        }
        {
            selected === 'productos' && <ProductosHeader />
        }
        {
            selected === 'quienesSomos' && <QuienesSomos />
        }
      </div>
    </header>

  )
}
