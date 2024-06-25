import { motion } from 'framer-motion'
import { TittleUnderline } from './TittleUnderline'
import { Link } from 'react-router-dom'

interface PrimaryButtonProps {
  to: string

}

export const PrimaryButton = ({ to }: PrimaryButtonProps): JSX.Element => {
  return (
    <Link
      to={to}
      className=' shadow-2xl flex mt-2 transition-colors bg-interbrasGreen hover:bg-green-700 text-white  text-lg justify-center items-center rounded-xl py-2 px-4 gap-2 '
    >
      Ver más
      <svg
        width={24}
        height={24}
        viewBox='0 0 23 26'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M21.1965 15.0915L17.5899 12.8973L21.1965 10.7031C21.5717 10.4784 21.8984 10.1812 22.1575 9.8289C22.4166 9.4766 22.603 9.07622 22.7057 8.65112C22.8085 8.22603 22.8255 7.78473 22.7559 7.35298C22.6863 6.92122 22.5314 6.50765 22.3002 6.13639C22.0691 5.76513 21.7663 5.44362 21.4096 5.19061C21.0529 4.9376 20.6494 4.75816 20.2226 4.66275C19.7958 4.56735 19.3543 4.55789 18.9238 4.63493C18.4933 4.71197 18.0824 4.87396 17.7152 5.11146L14.4658 7.19176V3.5779C14.4658 2.75402 14.1385 1.96387 13.556 1.3813C12.9734 0.798723 12.1833 0.471436 11.3594 0.471436C10.5355 0.471436 9.74534 0.798723 9.16276 1.3813C8.58019 1.96387 8.2529 2.75402 8.2529 3.5779V7.29324L5.00354 5.11146C4.26252 4.66763 3.37681 4.53263 2.53721 4.73555C1.69761 4.93847 0.971319 5.46307 0.514791 6.19634C0.0582631 6.92961 -0.0919644 7.81287 0.0964705 8.65583C0.284905 9.4988 0.796922 10.234 1.52222 10.7031L5.12883 12.8973L1.52222 15.0915C0.796922 15.5606 0.284905 16.2958 0.0964705 17.1388C-0.0919644 17.9817 0.0582631 18.865 0.514791 19.5983C0.971319 20.3315 1.69761 20.8561 2.53721 21.0591C3.37681 21.262 4.26252 21.127 5.00354 20.6831L8.2529 18.5728V22.2167C8.2529 23.0406 8.58019 23.8307 9.16276 24.4133C9.74534 24.9959 10.5355 25.3232 11.3594 25.3232C12.1833 25.3232 12.9734 24.9959 13.556 24.4133C14.1385 23.8307 14.4658 23.0406 14.4658 22.2167V18.5097L17.7152 20.6842C18.4562 21.128 19.3419 21.263 20.1815 21.0601C21.0211 20.8572 21.7474 20.3326 22.2039 19.5993C22.6605 18.866 22.8107 17.9828 22.6223 17.1398C22.4338 16.2968 21.9218 15.5616 21.1965 15.0925V15.0915Z'
        />
      </svg>

    </Link>
  )
}

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
      transition={{ duration: 0.3, delay: 0.2 }}
      className=' bg-interbrasGray h-[30rem] flex justify-center items-center  rounded-3xl  text-white'
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
            <img className=' shadow-2xl size-full rounded-2xl object-cover' src='/home/air2.png' alt='' />
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
            <img className=' shadow-2xl size-full rounded-2xl object-cover' src='/home/air1.png' alt='' />
          </motion.div>
        </div>

      </div>

      <div className=' flex  gap-4 flex-col justify-center items-center '>
        <h2 className='  text-5xl font-semibold relative  '>
          <TittleUnderline
            className='absolute bottom-0 h-full -left-16 '
          />
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
            <img className='  shadow-2xl size-full rounded-2xl object-cover' src='/home/air3.png' alt='' />
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
            <img className=' shadow-2xl size-full rounded-2xl object-cover' src='/home/air4.png' alt='' />
          </motion.div>
        </div>

      </div>
    </motion.section>
  )
}
