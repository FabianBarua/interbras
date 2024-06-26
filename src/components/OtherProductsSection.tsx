import React from 'react'
import { PrimaryButton } from './PrimaryButton'

interface OtherProductCardProps {
  name: string
  image: string
  url: string
}

const OtherProductCard: React.FC<OtherProductCardProps> = ({ name, image, url }) => {
  return (
    <div className=' w-full relative  h-full overflow-hidden rounded-[40px]'>
      <img src={image} alt={name} className=' h-full w-full object-cover' />

      <div className='text-center z-50  w-full flex flex-col  absolute bottom-10  '>
        <h2 className=' text-white text-5xl font-semibold '>
          {name}
        </h2>
        <div className=' w-min mx-auto'>
          <PrimaryButton to={url} />
        </div>
      </div>
    </div>
  )
}

export const OtherProductsSection: React.FC = () => {
  return (
    <>
      <section className='flex gap-6 h-[35rem]'>
        <OtherProductCard name='Planchas' image='/home/otherProductsSection/1.png' url='/planchas' />
        <OtherProductCard name='Licuadoras' image='/home/otherProductsSection/2.png' url='/planchas' />
        <OtherProductCard name='Beauty' image='/home/otherProductsSection/3.png' url='/planchas' />
        <OtherProductCard name='Batidoras' image='/home/otherProductsSection/4.png' url='/planchas' />
      </section>

      <section className='flex gap-6 h-[35rem]'>
        <OtherProductCard name='Arroceras' image='/home/otherProductsSection/5.png' url='/Arroceras' />
        <OtherProductCard name='Scooters' image='/home/otherProductsSection/6.png' url='/Scooters' />
      </section>

    </>
  )
}
