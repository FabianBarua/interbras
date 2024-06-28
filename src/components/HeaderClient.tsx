import { SwitchLanguage } from '../components/SwitchLanguage'
import { Logo } from '../components/Logo'
import React, { useEffect, useRef } from 'react'
import { DondeEstamos } from './DondeEstamos'
import { ProductosHeader } from './ProductosHeader'
import { QuienesSomos } from './QuienesSomos'
import { useHeader } from '../hooks/useHeader'
import { motion, useCycle } from 'framer-motion'

import { useDimensions } from './use-dimensions'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'

import './style.css'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(20px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

export const Header: React.FC = (): JSX.Element => {
  const {
    dondeEstamosRef,
    productosRef,
    quienesSomosRef,
    selected
  } = useHeader()

  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <>

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
          <ul className='flex mx-auto justify-center items-center gap-14'>
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

          <div className='items-center lg:flex hidden flex-1 justify-end pr-12'>
            <div className=' lg:flex justify-end hidden'>
              <SwitchLanguage
                theme='green'
              />
            </div>
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

      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        className=' nav w-min lg:hidden '
      >
        <motion.div className='background bg-interbrasGreen-500' variants={sidebar} />
        <Navigation isOpen={isOpen} />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>

    </>

  )
}
