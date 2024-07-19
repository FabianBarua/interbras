import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Children, getProductsByCategory } from '../shared/utils/data'
import { ProductInfo } from '../components/ProductInfo'
import { CarrouselCategory } from '../components/CarrouselCategory'
import { motion } from 'framer-motion'
import { PhotoViewer } from '../components/PhotoView'
import { NotFound } from '../components/NotFound'
import { ProductCard } from '../components/ProductCard'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { DownloadAlert } from '../components/DownloadAlert'
import {
  isApple,
  ScooterAndroidUrl,
  ScooterIosUrl
} from '../shared/utils/constants'

export const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  if (id === undefined) {
    return <NotFound />
  }

  const productSelected = getProductsByCategory({ id })

  if (productSelected === undefined) {
    return <NotFound />
  }

  interface scroll {
    scrollY: number
  }

  const [scrolling, setScrolling] = useState<scroll>({
    scrollY: 0
  })

  const [childSelected, setChildSelected] = useState<Children>(
    productSelected.children[0]
  )

  useEffect(() => {
    setChildSelected(productSelected.children[0])
  }, [productSelected])

  const getAllPhotosOfAllVariants = (): string[] => {
    const photos: string[] = []
    childSelected.variants.forEach((variant) => {
      variant.photos.forEach((photo) => {
        photos.push(photo)
      })
    })
    return photos
  }

  const { t } = useTranslation('products')
  const { t: t2 } = useTranslation('global')

  const name = t(productSelected.name)
  const description = t(productSelected.description)

  const isScooterPage = id === 'scooters'

  return (
    <>
      {isScooterPage
        ? (
          <DownloadAlert
            Title={() => (
              <p className=' flex items-center gap-3'>
                <img
                  src='/emojis/scooter.png'
                  alt='Download App'
                  className=' size-5 '
                />
                {t2('alert.scooters.title')}
              </p>
            )}
            message={t2('alert.scooters.message')}
            link={isApple() ? ScooterIosUrl : ScooterAndroidUrl}
          />
          )
        : null}

      <Helmet>
        <title>{name + ' - Interbras'}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={name + ' - Interbras'} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={window.location.href} />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Interbras' />
        <meta property='og:locale:alternate' content='en_US' />
        <meta property='og:locale:alternate' content='es_ES' />
        <meta property='og:locale:alternate' content='fr_FR' />
        <meta property='og:locale:alternate' content='it_IT' />
        <meta property='og:locale:alternate' content='de_DE' />
        <meta property='og:locale:alternate' content='nl_NL' />
        <meta property='og:locale:alternate' content='ru_RU' />
        <meta property='og:locale:alternate' content='ja_JP' />
        <meta property='og:locale:alternate' content='ko_KR' />
        <meta property='og:locale:alternate' content='zh_CN' />
        <meta property='og:locale:alternate' content='zh_TW' />
        <meta property='og:locale:alternate' content='hi_IN' />
        <meta property='og:locale:alternate' content='ar_SA' />
        <meta property='og:locale:alternate' content='he_IL' />
        <meta property='og:locale:alternate' content='id_ID' />
        <meta property='og:locale:alternate' content='th_TH' />
        <meta property='og:locale:alternate' content='tr_TR' />
        <meta property='og:locale:alternate' content='vi_VN' />
        <meta property='og:locale:alternate' content='pl_PL' />
        <meta property='og:locale:alternate' content='cs_CZ' />
        <meta property='og:locale:alternate' content='sk_SK' />
        <meta property='og:locale:alternate' content='hu_HU' />
      </Helmet>

      <motion.main
        className=' w-full flex flex-col mx-auto flex-1 pt-16'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className=' sm:w-[60%] w-[90%] flex lg:flex-row flex-col justify-center gap-10  mx-auto '>
          <div className=' no-select '>
            <PhotoViewer
              key={childSelected.name}
              name={name}
              photos={getAllPhotosOfAllVariants()}
            />
          </div>
          <div className='  flex-1 w-full '>
            <h1 className=' text-4xl font-semibold'>{name}</h1>
            <h2 className=' text-lg  mt-1 font-light leading-5'>
              {description.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
            <h3 className=' mt-4  text-lg font-medium text-black/3'>
              {t('whatDoYouWant')}
            </h3>

            <div className='  relative mt-3'>
              <div
                onScrollCapture={
                  (e) => {
                    setScrolling({
                      scrollY: e.currentTarget.scrollTop
                    })
                  }
                }
                style={{
                  height: '23rem',
                  overflow: 'auto'
                }}
                className='hideScrollBar transition-all w-full  flex flex-col gap-1 relative'
              >
                {productSelected.children.map((child, index) => (
                  <ProductCard
                    child={child}
                    key={index}
                    active={childSelected === child}
                    change={(child) => {
                      setChildSelected(child)
                    }}
                  />
                ))}
              </div>

              <div
                style={{
                  height: scrolling.scrollY < 348 ? '40px' : '0px'
                }}
                className=' w-full h-20 mask  bottom-0 absolute transition-all z-10 pointer-events-none bg-[#f2f2f2] '
              />
              <div
                style={{
                  height: scrolling.scrollY > 0 ? '40px' : '0px'

                }}
                className=' w-full h-20 mask top-0 absolute transition-all z-10 rotate-180 pointer-events-none bg-[#f2f2f2]'
              />
            </div>
          </div>
        </div>
        <ProductInfo {...childSelected.info} />
        <CarrouselCategory />
      </motion.main>
    </>
  )
}
