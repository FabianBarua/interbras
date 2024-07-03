import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface ProductItemCardProps {
  active: boolean
  name?: string
  description?: string
  icon?: string
  to: string | null
  mouseEnter?: () => void
  delay?: number
}

const ProductItemCard: React.FC<ProductItemCardProps> = (
  {
    active,
    name,
    description,
    icon,
    to,
    mouseEnter,
    delay
  }
) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 }
      }}
      transition={{ duration: 0.5, delay: delay !== undefined ? delay : 0.5 }}
      className=' h-full'
    >
      <Link
        to={to !== null ? to : '/'}
        onClick={
        () => {
          window.scrollTo(0, 0)
        }
      }
        onMouseEnter={
          mouseEnter
        }
        className={`
            w-full lg:w-[30rem]  h-full justify-center items-center py-6 lg:py-0 flex-1 text-white transition-colors flex overflow-hidden rounded-[40px]
          ${active ? 'bg-interbrasGreen-500' : 'bg-interbrasGray'}
          `}
      >
        <div
          className='flex justify-center transition-colors items-center h-full w-32 '
        >
          <img src={icon} alt='' className=' size-12 ' />
        </div>
        <div className=' flex-1  justify-center px-6 flex flex-col'>
          <h3 className='text-2xl text-white'>{name}
          </h3>
          <p className=' text-white/80 font-light text-lg leading-5'>{description}</p>
        </div>
      </Link>
    </motion.div>
  )
}

const productsSlide = [
  {
    id: 'productSlide1',
    name: 'home.animatedSection.1.name',
    description: 'home.animatedSection.1.description',
    icon: '/home/slideSection/1.svg',
    productPhoto: '/home/slideSection/1.png',
    to: '/product/tvs',
    delay: 0.3
  },
  {
    id: 'productSlide2',
    name: 'home.animatedSection.2.name',
    description: 'home.animatedSection.2.description',
    icon: '/home/slideSection/2.svg',
    productPhoto: '/home/slideSection/2.png',
    to: '/product/aires',
    delay: 0.5
  },
  {
    id: 'productSlide3',
    name: 'home.animatedSection.3.name',
    description: 'home.animatedSection.3.description',
    icon: '/home/slideSection/3.svg',
    productPhoto: '/home/slideSection/3.png',
    to: '/product/scooters',
    delay: 0.7
  }
]

interface useSlideTypes {
  selectedIndex: number
  scrollSnaps: number[]
  onCardClick: (index: number) => void
}

export const useSlides = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): useSlideTypes => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onCardClick = useCallback(
    (index: number) => {
      if (emblaApi == null) return
      emblaApi.scrollTo(index)
      if (onButtonClick != null) onButtonClick(emblaApi)
    },
    [emblaApi, onButtonClick]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (emblaApi == null) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onCardClick
  }
}

export const AnimatedSection: React.FC = () => {
  const options: EmblaOptionsType = {
    axis: 'y',
    loop: true
  }
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (autoplay === undefined) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, onCardClick } = useSlides(emblaApi, onNavButtonClick)
  const { t } = useTranslation('global')

  return (
    <>

      <section
        className=' flex  flex-col lg:flex-row gap-6 '
      >
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 40 }
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className=' h-[20rem] md:h-[30rem] w-full  bg-interbrasGray flex justify-center items-center rounded-[40px]  overflow-hidden' ref={emblaRef}
        >
          <div className=' size-full '>

            {
            productsSlide.map((product) => (
              <img
                key={product.id}
                src={product.productPhoto}
                alt=''
                className=' h-full mx-auto object-contain'
              />
            ))
            }
          </div>

        </motion.div>

        <div
          className='flex flex-col gap-2 h-[25rem] md:h-auto'
        >
          {
              productsSlide.map((product, index) => (
                <ProductItemCard
                  delay={
                    product.delay
                  }
                  to={
                    product.to
                  }
                  key={product.id}
                  active={
                    index === selectedIndex
                  }
                  name={t(product.name)}
                  description={t(product.description)}
                  icon={product.icon}
                  mouseEnter={
                    () => {
                      onCardClick(index)
                    }
                  }
                />
              ))
            }

        </div>
      </section>

    </>
  )
}
