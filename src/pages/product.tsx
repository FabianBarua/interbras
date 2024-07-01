import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Children, getProductsByCategory } from '../shared/utils/data'
import { DownArrow } from '../components/DownArrow'
import { ProductInfo } from '../components/ProductInfo'
import { CarrouselCategory } from '../components/CarrouselCategory'

const NotFound: React.FC = () => {
  return (
    <main className='  sm:w-[80%] w-[90%] flex flex-col gap-6 mx-auto bg-red-400'>
      <p>product not found</p>
    </main>
  )
}

const ProductCard: React.FC<{ child: Children, active: boolean, change: (child: Children) => void }> = ({ child, active, change }) => {
  return (

    <button
      className={
      `
        w-full text-lg flex p-2 py-2 rounded-3xl transition-colors border-2
      ${active ? '  bg-neutral-200' : 'hover:bg-neutral-200 '}
      `
    }
      onClick={() => change(child)}
    >
      <img
        src='/template.png' className=' size-20 p-3 object-contain rounded-3xl ' alt=''
      />

      <div className={
      `
      flex-1 ml-3 text-left my-auto
      ${active ? 'text-black ' : 'text-black/50'}
      `
    }
      >
        <p className={
        `
         text-xl font-medium
        `
      }
        >
          {child.name}
        </p>
        <div className=' flex '>
          {
          child.variants.length > 1 ? 'Colores:' : 'Color:'
        }
          <div className=' flex gap-1 items-center ml-1'>
            {
          child.variants.map((variant) => (
            <p key={variant.color.toString() + variant.id.toString()}>
              {variant.color}{child.variants.length > 1 && variant !== child.variants[child.variants.length - 1] ? ',' : ''}
            </p>
          ))
          }
          </div>
        </div>
      </div>
    </button>

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
  const [isOpenShowMore, setIsOpenShowMore] = useState<boolean>(false)
  const [childSelected, setChildSelected] = useState<Children>(productSelected.children[0])
  const [photoSelected, setPhotoSelected] = useState<string>(childSelected.variants[0].photos[0])

  return (
    <>
      <main className=' w-full flex flex-col mx-auto flex-1 pt-16'>
        <div className=' sm:w-[60%] w-[90%] flex justify-center gap-10  mx-auto '>
          <div>
            <img
              src='/template.png' alt={productSelected.name} className=' object-contain p-7 size-[400px] bg-white rounded-3xl'
            />
            <div className=' flex gap-2 w-full mt-2'>
              {
                productSelected.children[0].variants[0].photos.map((photo, index) => (
                  <img
                    key={index}
                    src='/template.png'
                    alt={productSelected.name}
                    className={
                      `
                      object-contain p-3 size-24 rounded-3xl border-2 bg-white hover:bg-neutral-200 transition-colors cursor-pointer 
                      ${photoSelected === photo ? ' border-interbrasGreen-500' : ' '}
                      `
                    }
                    onClick={() => setPhotoSelected(photo)}
                  />
                ))
              }
            </div>
          </div>
          <div className='  flex-1 w-full '>
            <h1 className=' text-4xl font-semibold'>
              {productSelected.name}
            </h1>
            <p className=' text-lg  font-light'>
              {productSelected.description}
            </p>
            <h3 className=' mt-4  text-lg font-medium text-black/3'>¿Que modelo deseas?</h3>
            <div className=' relative mt-3'>
              <div
                style={
              {
                height: isOpenShowMore ? 'auto' : '23rem',
                overflow: isOpenShowMore ? '' : 'hidden'
              }
            }
                className=' transition-all w-full  flex flex-col gap-1 relative'
              >
                {
              productSelected.children.map((child, index) => (

                <ProductCard
                  child={child} key={index}
                  active={childSelected === child}
                  change={(child) => {
                    setChildSelected(child)
                  }}
                />
              ))
            }
                <div
                  style={
                {
                  height: isOpenShowMore ? '0px' : '80px'
                }
              }
                  className=' w-full h-20 mask bottom-0 absolute transition-all z-10 pointer-events-none bg-[#f2f2f2]'
                />
              </div>

              <button
                onClick={
                () => setIsOpenShowMore(!isOpenShowMore)
              }
                style={
                {
                  bottom: isOpenShowMore ? '-3rem' : '0rem',
                  display: productSelected.children.length > 3 ? 'block' : 'none'
                }
              }
                className=' z-20  transition-allflex gap-3 justify-center items-center text-lg rounded-full absolute transition-all left-1/2 -translate-x-1/2  border-2 bg-interbrasGreen-200 border-interbrasGreen-500 h-9  px-5  text-interbrasGreen-500'
              >

                Mostrar {isOpenShowMore ? 'menos' : 'más'}

                <DownArrow
                  className='  size-8 inline transition-all fill-interbrasGreen-500'
                  style={{ transform: isOpenShowMore ? 'rotate(180deg)' : '' }}
                />
              </button>
            </div>
          </div>
        </div>
        <CarrouselCategory />
        <ProductInfo {...childSelected.info} />
      </main>
    </>
  )
}
