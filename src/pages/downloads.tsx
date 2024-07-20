import React from 'react'
import { motion } from 'framer-motion'
import { VelocityScroll } from '../components/VelocityScroll'
import AvatarCircles from '../components/AvatarCircles'
import { MagicCard } from '../components/MagicCard'

interface RippleProps {
  mainCircleSize?: number
  mainCircleOpacity?: number
  numCircles?: number
}

const Ripple = React.memo(function Ripple ({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8
}: RippleProps) {
  return (
    <div className='absolute inset-0 flex items-center justify-center bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]'>
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70
        const opacity = mainCircleOpacity - i * 0.03
        const animationDelay = `${i * 0.06}s`
        const borderStyle = i === numCircles - 1 ? 'dashed' : 'solid'
        const borderOpacity = 5 + i * 5

        return (
          <div
            key={i}
            className={`absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 [--i:${i}]`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              animationDelay,
              borderStyle,
              borderWidth: '1px',
              borderColor: `rgba(var(--foreground-rgb), ${borderOpacity / 100})`
            }}
          />
        )
      })}
    </div>
  )
})

export const Downloads: React.FC = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className=' h-full  flex w-full lg:w-[70%] mx-auto  flex-col  mb-12  '
      >
        <main className=' w-full h-full flex-1 lg:flex-row flex-col-reverse flex  items-center lg:mt-16'>

          <div className=' px-5 flex h-[30rem] flex-col justify-end flex-1 mt-12 lg:mt-0'>

            <div className=' relative mb-6  flex'>
              <img src='/home/slideSection/3.svg' className=' size-24 p-4 bg-interbrasGreen-500 rounded-3xl shadow-2xl rotate-[-15deg] z-10' alt='' />
              <img src='/home/slideSection/1.svg' className=' size-24 p-4 bg-interbrasGreen-800 rounded-3xl shadow-2xl rotate-[5deg] -translate-y-3 -translate-x-5' alt='' />
            </div>

            <h1 className='text-5xl font-bold mt-0 lg:mt-5'>
              Archivos de <br /> descarga
            </h1>
            <p className=' text-balance leading-5 text-black/65 mt-3'>
              Bienvenido a nuestra sección de descargas.
              <br />
              Aquí encontrará una selección de archivos.
            </p>

            <a
              href='#apps'
              className=' w-min mt-10 bg-interbrasGreen-500 text-white inline-flex items-center justify-center whitespace-nowrap text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary shadow hover:bg-primary/90 h-9 px-12 py-2 translate-y-[-1rem] animate-fade-in gap-1 rounded-lg  ease-in-out [--animation-delay:600ms]'
            >
              <span>Ver aplicaciones</span>
              <svg
                width={15}
                height={15}
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1 rotate-90'
              >
                <path
                  d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
                  fill='currentColor'
                  fillRule='evenodd'
                  clipRule='evenodd'
                />
              </svg>
            </a>

          </div>
          <div className=' lg:rounded-[3rem] rounded-b-[3rem] h-[20rem] lg:h-[30rem] w-full max-w-3xl bg-interbrasGreen-500 relative overflow-hidden flex flex-col justify-end'>
            <Ripple />
            <img src='/downloads/phone.png' alt='phone' className=' lg:h-full lg:w-auto w-full h-auto z-10 mx-auto relative ' />
          </div>
        </main>

        <div className=' text-5xl lg:my-32 my-10 relative'>
          <VelocityScroll
            text='Descargar archivos'
          />
          <div className=' flex rotate-180 justify-center items-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-20 bg-interbrasGreen-500 rounded-[2rem] shadow-custom'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              id='Bold'
              viewBox='0 0 24 24'
              className=' size-12  animate-jumpinfinite'
              fill='#fff'
            >
              <path d='M18.061,9.525,14.475,5.939a3.585,3.585,0,0,0-4.95,0L5.939,9.525a1.5,1.5,0,0,0,2.122,2.121L10.5,9.207V19a1.5,1.5,0,0,0,3,0V9.207l2.439,2.439a1.5,1.5,0,0,0,2.122-2.121Z' />
            </svg>
          </div>
        </div>
        <div className=' w-full flex-wrap flex gap-3   lg:justify-start justify-center ' id='apps'>
          <MagicCard
            className='w-full max-w-[90%] lg:max-w-64 flex flex-col bg-white  p-5 rounded-2xl border-2 border-interbrasGray/65'
          >
            <AvatarCircles avatarUrls={['/downloads/apple-icon.png', '/downloads/google-icon.png']} pricipalIcon='/home/slideSection/3.svg' />
            <p className=' text-lg font-semibold mt-2'>Scooters Interbras</p>
            <div className=' flex gap-2 h-min '>
              {
                  ['10.5', '8.5 pro'].map((model, index) => (
                    <div key={index} className=''>
                      <p className=' leading-4 font-light text-black/70'>{model}</p>
                    </div>
                  )
                  )
                }
            </div>
            <button className=' w-min text-lg text-interbrasGreen-500 leading-4 mt-3'>Descargar</button>
          </MagicCard>
        </div>
      </motion.div>
    </>
  )
}
