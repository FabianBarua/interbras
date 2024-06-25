import { motion } from 'framer-motion'
import { PrimaryButton } from './PrimaryButton'

export const MixSection: React.FC = () => {
  return (
    <>
      <motion.section
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 40 }
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className=' bg-interbrasGray  rounded-3xl h-[30rem] flex items-center px-24 '
      >
        <div className=' text-white flex flex-col gap-3 '>
          <h2 className=' text-5xl font-semibold '>
            Mixteras &
            <br />
            Parrilla Grill
          </h2>
          <p className=' text-xl font-light leading-5 '>
            Sándwiches perfectos,
            <br />
            sin esfuerzo.
          </p>
          <div className=' w-min'>
            <PrimaryButton to='/mixteras' />
          </div>
        </div>
      </motion.section>
    </>
  )
}
