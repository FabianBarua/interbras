import { motion } from 'framer-motion'

export const QuienesSomos: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className=' h-full w-full flex justify-center'
    >

      <div className='  justify-center text-center  text-3xl flex items-center h-full gap-7'>
        <p className=' text-left w-full max-w-xl leading-8 font-light'>
          <strong className=' font-bold'>
            Somos una empresa paraguaya
          </strong>
          <br />
          apasionada por mejorar la vida en el
          <br />
          hogar.
        </p>

        <svg
          width={167 - 30}
          viewBox='0 0 167 153'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'

        >
          <path d='M92.1699 35.6795H60.4644V120.684H92.1699V35.6795Z' fill='white' />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M76.311 0C85.0413 0 92.1209 7.07965 92.1209 15.7978C92.1209 24.5159 85.0413 31.6078 76.311 31.6078C67.5806 31.6078 60.5132 24.5281 60.5132 15.7978C60.5132 7.06742 67.6051 0 76.311 0Z'
            fill='white'
          />
          <path
            d='M153.637 18.769C180.036 60.4032 164.532 117.444 121.724 141.361C79.3312 165.999 22.315 150.226 0 106.28C6.17483 116.074 14.0493 124.707 23.2809 131.457C100.864 186.04 195.687 103.431 153.637 18.769Z'
            fill='white'
          />
        </svg>

      </div>

    </motion.div>
  )
}
