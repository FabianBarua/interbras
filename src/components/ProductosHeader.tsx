import { motion } from 'framer-motion'

export const ProductosHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className=' h-full w-full flex justify-center'
    >
      <div className='   flex my-auto gap-6 '>
        <img src='/productosHeader.png' className=' h-64' alt='Arrow' />
        <div className=' flex flex-col items-left'>
          <h1 className='text-lg  font-bold'>Nuestros productos</h1>
          <div className=' flex gap-16 mt-2'>
            <div className=' flex-col flex'>
              <a className=' opacity-55 hover:opacity-100 transition-colors' href='#'> AirFryer </a>
              <a className=' opacity-55 hover:opacity-100 transition-colors' href='#'> X-Scooter </a>
              <a className=' opacity-55 hover:opacity-100 transition-colors' href='#'> Aire Acondicionado </a>
              <a className=' opacity-55 hover:opacity-100 transition-colors' href='#'> Televisores </a>
              <a className=' opacity-55 hover:opacity-100 transition-colors' href='#'> Licuadoras </a>
              <a className=' opacity-55 hover:opacity-100 transition-colors' href='#'> Batidoras </a>
              <a className=' opacity-55 hover:opacity-100 transition-colors' href='#'> Cocinas Electricas </a>
            </div>
            <div className=' flex-col flex'>
              <a className=' opacity-55 hover:opacity-100 transition-colors' href='#'> Cafeteras </a>
              <a className=' opacity-55 hover:opacity-100 transition-colors' href='#'> Hervidoras </a>
              <a className=' opacity-55 hover:opacity-100 transition-colors' href='#'> Arroceras & Ollas </a>
              <a className=' opacity-55 hover:opacity-100 transition-colors' href='#'> Dispensadores de Agua </a>
              <a className=' opacity-55 hover:opacity-100 transition-colors' href='#'> Mixteras & Parrilla Grill </a>
              <a className=' opacity-55 hover:opacity-100 transition-colors' href='#'> Beauty </a>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  )
}
