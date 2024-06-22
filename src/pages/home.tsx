import React from 'react'
import 'atropos/css'
import { ProductsAnimated } from '../components/ProductsAnimated'
import { AirFryersSection } from '../components/AirFryersSection'

interface ProductItemCardProps {
  active: boolean
  name?: string
  description?: string
  icon?: string
}

const ProductItemCard: React.FC<ProductItemCardProps> = (
  {
    active,
    name,
    description,
    icon
  }
) => {
  return (
    <>
      <div className=' w-[30rem]  flex-1 bg-interbrasGray text-whiterounded-3xl  flex overflow-hidden rounded-3xl'>
        <div className={
          `
          flex justify-center items-center h-full   w-32 
          ${active ? 'bg-interbrasGreen' : 'bg-interbrasGray'}
          `
        }
        >
          <img src={icon} alt='' className=' size-12' />
        </div>
        <div className=' flex-1  justify-center px-6 flex flex-col'>
          <h3 className=' text-2xl  font-semibold text-interbrasGreen'>{name}</h3>
          <p className=' text-white font-extralight'>{description}</p>
        </div>
      </div>
    </>
  )
}

export const Home: React.FC = () => {
  const productsSlide = [
    {
      id: 'productSlide1',
      name: 'Product name',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      icon: '/home/slideSection/1.svg'
    },
    {
      id: 'productSlide2',
      name: 'Product name',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      icon: '/home/slideSection/2.svg'
    },
    {
      id: 'productSlide3',
      name: 'Product name',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      icon: '/home/slideSection/3.svg'
    }
  ]

  return (
    <>
      <ProductsAnimated />
      <main className='  w-[80%] flex flex-col gap-6 mx-auto'>

        <AirFryersSection />

        <section className=' flex  gap-6 h-[30rem]'>
          <div className=' flex-1  bg-interbrasGreen flex justify-center items-center rounded-3xl'>
            <img src='/home/air1.png' alt='' />
          </div>
          <div className='flex flex-col gap-3'>
            {
              productsSlide.map((product) => (
                <ProductItemCard
                  key={product.id}
                  active
                  name={product.name}
                  description={product.description}
                  icon={product.icon}
                />
              ))
            }

          </div>
        </section>

      </main>
    </>
  )
}
