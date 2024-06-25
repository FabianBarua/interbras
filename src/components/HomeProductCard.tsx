import Atropos from 'atropos/react'
import { ProductItemHome } from '../types'

export const HomeProductCard = ({ name, photo, isMagic, url }: ProductItemHome): JSX.Element => {
  return (
    <Atropos
      shadow={false}
      className={
          `
          ${
          isMagic ? ' mt-4  ' : ' mt-0'
          }
          cursor-pointer 
          
          `
      }
    >

      <a
        className=' mx-auto sm:size-16 md:size-20 lg:size-28 xl:size-32  md:p-4 p-2  flex justify-center items-center rounded-2xl bg-interbrasGreen'
        href={
            typeof url === 'string' ? url : '#'
          }
      >
        <img
          data-atropos-offset='-5'
          className=' '
          src={
              photo
          } alt={
            typeof name === 'string' ? name : ''
          }
        />
      </a>
      {
          isMagic && (
            <div className=' text-center mt-3 leading-5 text-lg'>
              {name}
            </div>
          )
        }
    </Atropos>
  )
}
