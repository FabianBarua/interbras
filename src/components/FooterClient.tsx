
import { Logo } from '../components/Logo'
import React from 'react'

export const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className=' flex justify-between h-40 items-center px-52 border-t-2 mt-16 '>
      <p>
        Copyright © 2024 Interbras. Todos los derechos reservados.
      </p>
      <span className=' text-interbrasGreen-500'>
        <Logo />
      </span>
    </footer>
  )
}
