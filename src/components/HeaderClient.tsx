import { useHover } from '@uidotdev/usehooks'
import { SwitchLanguage } from '../components/SwitchLanguage'
import { Logo } from '../components/Logo'
import React, { useState, useEffect } from 'react'
import { DondeEstamos } from './DondeEstamos'
import { ProductosHeader } from './ProductosHeader'
import { QuienesSomos } from './QuienesSomos'

export const Header: React.FC = (): JSX.Element => {
  const [dondeEstamosRef, hoverDondeEstamos] = useHover()
  const [productosRef, hoverProductos] = useHover()
  const [quienesSomosRef, hoverQuienesSomos] = useHover()

  const [selected, setSelected] = useState<String | null>(null)

  useEffect(() => {
    const headerClient = document.getElementById('header-client')

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const headerMouseLeave = () => {
      setSelected(null)
    }

    headerClient?.addEventListener('mouseleave', headerMouseLeave)
    return () => {
      headerClient?.removeEventListener('mouseleave', headerMouseLeave)
    }
  }, [])

  useEffect(() => {
    if (hoverDondeEstamos) {
      setSelected('dondeEstamos')
    } else if (hoverProductos) {
      setSelected('productos')
    } else if (hoverQuienesSomos) {
      setSelected('quienesSomos')
    }
  },
  [
    hoverDondeEstamos,
    hoverProductos,
    hoverQuienesSomos
  ])

  return (

    <header
      id='header-client'
      className={
      `
      shadow-xl  fixed w-full z-50  flex flex-col h-20  pt-5  transition-all 
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
