import React from 'react'
import 'atropos/css'
import { ProductsAnimated } from '../components/ProductsAnimated'
import { AirFryersSection } from '../components/AirFryersSection'
import { AnimatedSection } from '../components/AnimatedSection'
import { MixSection } from '../components/MixSection'
import { CocinasSection } from '../components/CocinasSection'
import { HervidorasAndCafeterasSection } from '../components/HervidorasAndCafeterasSection'
import { OtherProductsSection } from '../components/OtherProductsSection.tsx'
import { motion } from 'framer-motion'
import { DownloadAlert } from '../components/DownloadAlert.tsx'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

// verify Android or iOS

export const Home: React.FC = () => {
  const isAndroid: () => boolean = () => {
    const ua = navigator.userAgent.toLowerCase()
    return ua.includes('android')
  }
  const { t } = useTranslation('global')

  const AndroidUrl = 'http://html5.zhouchangshu.com/apk/huihao.apk'
  const IosUrl = 'https://apps.apple.com/es/app/id1509887773'

  return (
    <>

      <Helmet>
        <title>Interbras</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >

        <DownloadAlert
          Title={() => (
            <p className=' flex items-center gap-3'>
              <img
                src='/emojis/scooter.png'
                alt='Download App'
                className=' size-5 '
              />
              {
                t('alert.scooters.title')
              }
            </p>
          )}
          message={
            t('alert.scooters.message')
          }
          link={
            (isAndroid())
              ? AndroidUrl
              : IosUrl
          }
        />

        <ProductsAnimated />
        <main className='  sm:w-[80%] w-[90%] flex flex-col gap-6 mx-auto'>

          <AirFryersSection />

          <AnimatedSection />

          <MixSection />

          <CocinasSection />

          <HervidorasAndCafeterasSection />

          <OtherProductsSection />

        </main>
      </motion.div>
    </>
  )
}
