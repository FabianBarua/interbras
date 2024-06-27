import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

interface ProductosHeaderProps {
  clicked?: () => void
}

interface LinkItemProps {
  to: string
  children: React.ReactNode

  clicked?: () => void
}

const LinkItem: React.FC<LinkItemProps> = ({ to, children, clicked }) => {
  return (
    <Link
      className=' opacity-55 hover:opacity-100 transition-colors'
      to={to}
      onClick={
        () => {
          if (clicked !== undefined) {
            clicked()
          }
        }
      }
    >
      {children}
    </Link>
  )
}

export const ProductosHeader: React.FC<ProductosHeaderProps> = ({
  clicked
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className=' h-full w-full flex justify-center'
    >
      <div className=' mt-5 lg:mt-auto mx-3  lg:mx-0 text-white flex lg:my-auto lg:flex-row flex-col gap-6 '>
        <img src='/productosHeader.png' className='  h-64 ' alt='Arrow' />
        <div className=' flex flex-col items-left'>
          <h1 className='text-lg  font-bold'>Nuestros productos</h1>
          <div className=' flex gap-16 mt-2'>
            <div className=' flex-col flex'>
              <LinkItem
                clicked={clicked} to='/airfryer'
              > AirFryer
              </LinkItem>
              <LinkItem
                clicked={clicked} to='#'
              > X-Scooter
              </LinkItem>
              <LinkItem
                clicked={clicked} to='#'
              > Aire Acondicionado
              </LinkItem>
              <LinkItem
                clicked={clicked} to='#'
              > Televisores
              </LinkItem>
              <LinkItem
                clicked={clicked} to='#'
              > Licuadoras
              </LinkItem>
              <LinkItem
                clicked={clicked} to='#'
              > Batidoras
              </LinkItem>
              <LinkItem
                clicked={clicked} to='#'
              > Cocinas Electricas
              </LinkItem>
            </div>
            <div className=' flex-col flex'>
              <LinkItem
                clicked={clicked} to='#'
              > Cafeteras
              </LinkItem>
              <LinkItem
                clicked={clicked} to='#'
              > Hervidoras
              </LinkItem>
              <LinkItem
                clicked={clicked} to='#'
              > Arroceras & Ollas
              </LinkItem>
              <LinkItem
                clicked={clicked} to='#'
              > Dispensadores de Agua
              </LinkItem>
              <LinkItem
                clicked={clicked} to='#'
              > Mixteras & Parrilla Grill
              </LinkItem>
              <LinkItem
                clicked={clicked} to='#'
              > Beauty
              </LinkItem>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  )
}
