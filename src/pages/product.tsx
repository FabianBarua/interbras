import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Children, getProductsByCategory } from '../shared/utils/data'
import { DownArrow } from '../components/DownArrow'
import { ProductInfo } from '../components/ProductInfo'
import { CarrouselCategory } from '../components/CarrouselCategory'
import { motion } from 'framer-motion'
import { PhotoViewer } from '../components/PhotoView'
import { NotFound } from '../components/NotFound'
import { ProductCard } from '../components/ProductCard'
import { useTranslation } from 'react-i18next'

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

  const location = useLocation()

  useEffect(() => {
    setIsOpenShowMore(false)
  }, [location])

  useEffect(() => {
    setChildSelected(productSelected.children[0])
  }, [productSelected])

  const getAllPhotosOfAllVariants = (): string[] => {
    const photos: string[] = []
    childSelected.variants.forEach((variant) => {
      variant.photos.forEach((photo) => {
        photos.push(photo)
      })
    }
    )
    return photos
  }

  const { t } = useTranslation('products')

  const name = t(productSelected.name)
  const description = t(productSelected.description)

  return (
    <>
      <motion.main
        className=' w-full flex flex-col mx-auto flex-1 pt-16'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className=' sm:w-[60%] w-[90%] flex lg:flex-row flex-col justify-center gap-10  mx-auto '>
          <div className=' no-select '>

            <PhotoViewer
              name={name}
              photos={
              getAllPhotosOfAllVariants()
              }
            />

          </div>
          <div className='  flex-1 w-full '>
            <h1 className=' text-4xl font-semibold'>
              {name}
            </h1>
            <p className=' text-lg  mt-1 font-light leading-5'>
              {description.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <h3 className=' mt-4  text-lg font-medium text-black/3'>
              {
              t('whatDoYouWant')
            }
            </h3>
            <div className=' relative mt-3'>
              <div
                style={
              {
                height: isOpenShowMore
                  ? (105 * productSelected.children.length).toString() + 'px'
                  : '23rem',
                overflow: 'hidden'
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
                className=' z-20  transition-all  text-nowrap flex gap-3 justify-center items-center text-lg rounded-full absolute  left-1/2 -translate-x-1/2  border-2 bg-interbrasGreen-200 border-interbrasGreen-500 h-9  px-5  text-interbrasGreen-500'
              >

                {t('showMore.show')} {isOpenShowMore ? t('showMore.showMore') : t('showMore.showLess')}

                <DownArrow
                  className='  size-8 inline transition-all fill-interbrasGreen-500'
                  style={{ transform: isOpenShowMore ? 'rotate(180deg)' : '' }}
                />
              </button>
            </div>
          </div>
        </div>
        <ProductInfo {...childSelected.info} />
        <CarrouselCategory />
      </motion.main>
    </>
  )
}
