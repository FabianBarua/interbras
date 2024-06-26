import { motion } from 'framer-motion'
import { PrimaryButton } from './PrimaryButton'

export const CocinasSection: React.FC = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 }
      }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className=' bg-interbrasGray relative rounded-[40px] lg:h-[30rem] flex flex-col-reverse lg:flex-row items-center p-10  gap-10'
    >
      <img src='/home/cocinaSection/1.png' alt='Cocinas interbras' className=' rounded-[40px] h-[15rem] absolute md:relative bottom-0 right-0 lg:h-full object-cover' />
      <div className='text-center text-white w-full flex flex-col gap-3  '>
        <h2 className=' text-5xl font-semibold '>
          Cocinas
        </h2>
        <p className=' text-xl font-light leading-5   '>
          Innovación compacta para <br /> tu cocina en tu mesa.
        </p>
        <div className=' w-min mx-auto'>
          <PrimaryButton to='/cocinas' />
        </div>
      </div>
    </motion.section>
  )
}
