import { useTranslation } from 'react-i18next'
import { useSlides } from '../hooks/useSlide'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const AnimatedSection: React.FC = () => {
  const { canvasRef, setSelectedProduct, productsSlide, selectedProduct, stopInterval } = useSlides()

  // haciendo stop interval
  const { t } = useTranslation('products')
  return (
    <>

      <section
        onMouseLeave={
          () => {
            setSelectedProduct(null)
          }
        }
        className=' h-[23rem] lg:h-auto w-full bg-interbrasGray flex justify-center items-center rounded-[40px]  overflow-hidden relative'
      >
        <canvas
          ref={canvasRef}
          width={2458 * 1.5}
          height={1080 * 1.5}
          style={{
            backgroundImage: 'url(/home/slideSection/0.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className=' focused-image h-full w-full object-cover  transition-all duration-1000'
        />
        <div className=' absolute z-10 left-1/2 -translate-x-1/2 bottom-2 bg-interbrasGray p-3 flex  gap-8 rounded-xl '>
          {
            productsSlide.map((product) => (
              <Link
                onClick={
                () => {
                  window.scrollTo(0, 0)
                }
                }
                to={product.to}
                key={product.id}
                onMouseEnter={() => {
                  setSelectedProduct(product)
                  stopInterval({ turn: true })
                }}
                className='text-white bg-zinc-800 p-3 rounded-xl relative  flex-col hover:bg-zinc-900 cursor-pointer active:bg-zinc-950 size-10 flex justify-center items-center'
              >
                <img
                  src={
                  product.icon
                } alt=''
                  className=' w-10 h-10'
                />
                {
                  selectedProduct?.id === product.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className=' bg-zinc-900 text-wrap absolute p-1 rounded-xl px-4 bottom-[120%] shadow-xl'
                    >
                      {t(product.name).split(' ')[0]}
                    </motion.div>
                  )
                }
              </Link>
            ))
          }
        </div>
      </section>

    </>
  )
}
