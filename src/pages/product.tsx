import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsByCategory, Product, Variant } from '../shared/utils/data'

const NotFound: React.FC = () => {
  return (
    <main className='  sm:w-[80%] w-[90%] flex flex-col gap-6 mx-auto bg-red-400'>
      <p>product not found</p>
    </main>
  )
}

export const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  if (id === undefined) {
    return <NotFound />
  }

  const productSelected = getProductsByCategory({ id })

  if (productSelected === undefined) {
    return <NotFound />
  }

  const [variantSelected, setVariantSelected] = useState<Variant>(productSelected.children[0].variants[0])
  const [photoSelected, setPhotoSelected] = useState<string>(variantSelected.photos[0])
  return (
    <>
      <main className='  sm:w-[80%] w-[90%] flex flex-col gap-6 mx-auto flex-1 pt-16'>
        <div className=' flex justify-center gap-12  w-full '>
          <div>
            <img
              src={photoSelected} alt={productSelected.name} className=' size-96 bg-white rounded-3xl'
            />
            <div className=' flex gap-2 w-full mt-2'>
              {
                productSelected.children[0].variants[0].photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={productSelected.name}
                    className=' size-24 rounded-3xl bg-white '
                    onClick={() => setPhotoSelected(photo)}
                  />
                ))
              }
            </div>
          </div>
          <div className='  w-full max-w-md'>
            <h1 className=' text-4xl font-bold'>
              {productSelected.name}
            </h1>
            <p className=' text-lg '>
              {productSelected.description}
            </p>
            <h3 className=' mt-4 font-bold'>¿Que modelo deseas?</h3>
            <div className=' h-96 overflow-hidden w-full  flex flex-col gap-3 relative'>
              {
              productSelected.children.map((child, index) => (
                <button
                  key={index}
                  className={
                    `
                      w-full text-lg flex  p-2 rounded-3xl transition-colors border-2
                    ${child.variants[0].id === variantSelected.id ? '  bg-neutral-300' : 'hover:bg-neutral-200 '}
                    `
                  }
                  onClick={() => setVariantSelected(child.variants[0])}
                >
                  <img
                    src={
                    child.variants[0].photos[0]
                  } className='w-20 h-20 rounded-3xl bg-white' alt=''
                  />
                  <div className='  w-full ml-3 text-left my-auto'>
                    <p className=' font-bold'>
                      {child.name}
                    </p>
                    <div className=' flex'>
                      Colores:
                      <div className=' flex gap-2 items-center ml-3'>
                        {
                        child.variants.map((variant, index) => (
                          <div key={index} className=' size-6 rounded-full' style={{ backgroundColor: variant.color }} />
                        ))
                        }
                      </div>
                    </div>
                  </div>
                </button>
              ))
            }

              <button className=' absolute -bottom-2 left-1/2 -translate-x-1/2 bg-interbrasGreen-500 px-4 py-2'>
                Ver más
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
