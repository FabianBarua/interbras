import { motion } from 'framer-motion'

export const DondeEstamos: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className=' h-full w-full flex justify-between'
    >
      <div className='  flex items-end h-full'>
        <img src='/arrowDondeEstamos.svg' className=' h-52' alt='Arrow' />
      </div>
      <div className='  justify-center text-center  text-3xl flex items-center h-full'>
        <p>
          En las mejores tiendas
          <br />
          de <strong>Paraguay</strong>! 🇵🇾
        </p>
      </div>
      <div className=' flex  relative items-end h-full'>
        <img src='/edificiosDondeEstamos.svg' className=' h-60 mr-6' alt='Arrow' />
      </div>
    </motion.div>
  )
}
