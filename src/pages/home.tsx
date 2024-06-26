import React from 'react'
import 'atropos/css'
import { ProductsAnimated } from '../components/ProductsAnimated'
import { AirFryersSection } from '../components/AirFryersSection'
import { AnimatedSection } from '../components/AnimatedSection'
import { MixSection } from '../components/MixSection'
import { CocinasSection } from '../components/CocinasSection'
import { KettleAndCafeterasSection } from '../components/KettleAndCafeterasSection'
import { OtherProductsSection } from '../components/OtherProductsSection.tsx'

export const Home: React.FC = () => {
  return (
    <>
      <ProductsAnimated />
      <main className='  sm:w-[80%] w-[90%] flex flex-col gap-6 mx-auto'>

        <AirFryersSection />

        <AnimatedSection />

        <MixSection />

        <CocinasSection />

        <KettleAndCafeterasSection />

        <OtherProductsSection />

      </main>
    </>
  )
}
