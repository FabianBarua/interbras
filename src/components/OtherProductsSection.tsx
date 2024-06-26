import React from 'react'
import { PrimaryButton } from './PrimaryButton'
import { motion } from 'framer-motion'

interface OtherProductCardProps {
  name: string
  image: string
  url: string
  delay?: number
}

const OtherProductCard: React.FC<OtherProductCardProps> = ({ name, image, url, delay }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 }
      }}
      transition={{ duration: 0.5, delay: delay !== undefined ? delay : 0.5 }}
      className=' w-full relative  h-full overflow-hidden rounded-[40px]'
    >
      <img src={image} alt={name} className=' h-full w-full object-cover' />

      <div className='text-center w-full flex flex-col  absolute bottom-5 lg:bottom-10  '>
        <h2 className=' text-white text-2xl md:text-4xl xl:text-5xl font-semibold '>
          {name}
        </h2>
        <div className=' w-min mx-auto'>
          <PrimaryButton to={url} />
        </div>
      </div>
    </motion.div>
  )
}

export const OtherProductsSection: React.FC = () => {
  return (
    <>
      <section className=' grid grid-cols-2  lg:grid-cols-4 gap-6 '>
        <OtherProductCard delay={0.5} name='Planchas' image='/home/otherProductsSection/1.png' url='/planchas' />
        <OtherProductCard delay={0.7} name='Licuadoras' image='/home/otherProductsSection/2.png' url='/planchas' />
        <OtherProductCard delay={0.9} name='Beauty' image='/home/otherProductsSection/3.png' url='/planchas' />
        <OtherProductCard delay={1.2} name='Batidoras' image='/home/otherProductsSection/4.png' url='/planchas' />
      </section>

      <section className=' grid grid-cols-2 gap-6 h-[18rem] lg:h-[30rem] '>
        <OtherProductCard delay={0.5} name='Arroceras' image='/home/otherProductsSection/5.png' url='/Arroceras' />
        <OtherProductCard delay={0.7} name='Scooters' image='/home/otherProductsSection/6.png' url='/Scooters' />
      </section>

    </>
  )
}
