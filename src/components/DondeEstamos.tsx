import { motion } from 'framer-motion'

export const DondeEstamos: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className=' h-full w-full flex justify-center lg:justify-between '
    >
      <div className=' lg:flex hidden items-end h-full'>
        <img src='/arrowDondeEstamos.svg' className=' h-52' alt='Arrow' />
      </div>
      <div className='  text-white  justify-center text-center  text-3xl flex items-center h-full'>
        <p>
          En las mejores tiendas
          <br />
          de <strong>Paraguay</strong>! 🇵🇾
        </p>
      </div>
      <div className=' lg:flex hidden relative items-end h-full'>
        <img src='/edificiosDondeEstamos.svg' className=' h-60 mr-6' alt='Arrow' />
      </div>
    </motion.div>
  )
}
