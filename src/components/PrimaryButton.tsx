import { Link } from 'react-router-dom'

interface PrimaryButtonProps {
  to: string
  className?: string
}

export const PrimaryButton = ({ to, className }: PrimaryButtonProps): JSX.Element => {
  return (
    <Link
      to={to}
      className={
        `
        text-nowrap shadow-2xl flex mt-1 transition-colors bg-interbrasGreen-500 hover:bg-green-600 text-white  text-lg justify-center items-center rounded-xl py-1 lg:py-2 px-4 gap-2 
        ${className !== undefined ? className : ''}
        `
      }
    >
      Ver más
    </Link>
  )
}
