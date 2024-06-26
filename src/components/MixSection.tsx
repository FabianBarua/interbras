import { motion } from 'framer-motion'
import { PrimaryButton } from './PrimaryButton'

const mixers = [
  {
    id: 'mixteraSection1',
    tittle: 'Code',
    image: '/home/mixteraSection/1.png',
    url: '/mixteras',
    hover: ' hover:scale-105 hover:translate-x-[-70%] ',
    className: 'translate-x-[-50%] left-[30%] top-[55%] -translate-y-1/2  -rotate-12'
  },
  {
    id: 'mixteraSection2',
    tittle: 'Code',
    image: '/home/mixteraSection/2.png',
    url: '/mixteras',
    hover: ' hover:scale-105 hover:translate-y-[-60%] ',
    className: ' translate-x-[-50%] left-[50%] z-[99999] top-[40%] -translate-y-1/2 '
  },
  {
    id: 'mixteraSection3',
    tittle: 'Code',
    image: '/home/mixteraSection/3.png',
    url: '/mixteras',
    hover: 'hover:scale-105 hover:translate-x-[-30%] ',
    className: 'translate-x-[-50%] left-[70%] top-[55%] -translate-y-1/2  rotate-12'

  }
]

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
        className=' bg-interbrasGray  rounded-3xl h-[30rem] flex items-center pl-24 '
      >
        <div className=' text-white flex flex-col gap-3  w-[50%] '>
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
        <div className=' relative  w-full   h-full'>
          {mixers.map((mixer) => (
            <a
              href={mixer.url}
              key={mixer.id} className={
              `
              absolute transition-all rounded-3xl  shadow-xl  flex justify-center items-center size-64 bg-white hover:bg-interbrasGreen-500 
              ${mixer.className}
              ${mixer.hover}
              `
            }
            >
              <img
                src={mixer.image}
                alt={mixer.tittle}
                className=' rounded-3xl '
              />
            </a>
          ))}
        </div>
      </motion.section>
    </>
  )
}
