
import { Logo } from '../components/Logo'
import React from 'react'

export const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className='  flex sm:justify-between justify-center sm:gap-0 gap-5 h-40 items-center sm:px-52 px-5 flex-col-reverse sm:flex-row text-center border-t-2 mt-16 '>
      <p>
        Copyright © 2024 Interbras. Todos los derechos reservados.
      </p>
      <span className=' text-interbrasGreen-500'>
        <Logo />
      </span>
    </footer>
  )
}
