import { motion } from 'framer-motion'
import { PrimaryButton } from './PrimaryButton'

export const AirFryersSection: React.FC = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 }
      }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className=' bg-interbrasGray h-[30rem] flex justify-center items-center  rounded-[40px]  text-white'
    >
      <div className=' w-full  h-full relative'>

        <div className='size-64 absolute left-[40%]  -translate-x-1/2 top-[60%] -translate-y-1/2'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={{
              visible: { x: 0, y: 0, opacity: 1 },
              hidden: { x: -40, y: 40, opacity: 0 }
            }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className=' size-64 '
          >
            <img className=' shadow-2xl size-full rounded-[40px] object-cover' src='/home/air2.png' alt='' />
          </motion.div>
        </div>

        <div className='size-64 absolute left-1/2 -translate-x-1/2 top-[40%] -translate-y-1/2 '>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={{
              visible: { x: 0, y: 0, opacity: 1 },
              hidden: { x: -40, y: 40, opacity: 0 }
            }}
            transition={{ duration: 0.5, delay: 1 }}
            className=' size-64 '
          >
            <img className=' shadow-2xl size-full rounded-[40px] object-cover' src='/home/air1.png' alt='' />
          </motion.div>
        </div>

      </div>

      <div className=' flex  gap-4 flex-col justify-center items-center '>
        <h2 className='  text-5xl font-semibold relative  '>
          <p className=' relative '>Air fryers</p>
        </h2>
        <p
          className=' w-72  text-center text-xl  font-extralight leading-6'
        >
          Nueva tendencia en cocina saludable y rápida.
        </p>
        <PrimaryButton to='/air-fryers' />
      </div>

      <div className=' w-full  h-full  relative'>

        <div className='size-64 absolute left-[60%]  -translate-x-1/2 top-[60%] -translate-y-1/2'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={{
              visible: { x: 0, y: 0, opacity: 1 },
              hidden: { x: 40, y: 40, opacity: 0 }
            }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className=' size-64 '
          >
            <img className='  shadow-2xl size-full rounded-[40px] object-cover' src='/home/air3.png' alt='' />
          </motion.div>
        </div>

        <div className='size-64 absolute left-1/2  -translate-x-1/2 top-[40%] -translate-y-1/2 '>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={{
              visible: { x: 0, y: 0, opacity: 1 },
              hidden: { x: 40, y: 40, opacity: 0 }
            }}
            transition={{ duration: 0.5, delay: 1 }}
            className=' size-64 '
          >
            <img className=' shadow-2xl size-full rounded-[40px] object-cover' src='/home/air4.png' alt='' />
          </motion.div>
        </div>

      </div>
    </motion.section>
  )
}
