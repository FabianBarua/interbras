import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHover } from '@uidotdev/usehooks'

interface ProductItemCardProps {
  active: boolean
  name?: string
  description?: string
  icon?: string
  to: string | null
  mouseEnter?: () => void
}

const ProductItemCard: React.FC<ProductItemCardProps> = (
  {
    active,
    name,
    description,
    icon,
    to,
    mouseEnter
  }
) => {
  const [hoverRef, isHovered] = useHover()

  useEffect(() => {
    if (isHovered) {
      if (mouseEnter != null) {
        mouseEnter()
      }
    }
  }, [isHovered])

  return (
    <>
      <Link
        to={
        to !== null ? to : '/'

      }
        className={`
           w-[30rem]  flex-1 text-whiterounded-3xl  transition-colors flex overflow-hidden rounded-3xl
          ${active ? 'bg-interbrasGreen' : 'bg-interbrasGray'}
          `}
      >
        <div
          ref={hoverRef}
          className='flex justify-center transition-colors items-center h-full w-32 '
        >
          <img src={icon} alt='' className=' size-12 ' />
        </div>
        <div className=' flex-1  justify-center px-6 flex flex-col'>
          <h3 className={
            `
            text-2xl    text-white
            ${active ? 'font-semibold ' : '  font-normal'}
            `
          }
          >{name}
          </h3>
          <p className=' text-white font-light text-lg'>{description}</p>
        </div>
      </Link>
    </>
  )
}

const productsSlide = [
  {
    id: 'productSlide1',
    name: 'TVs',
    description: 'Innovación en pantallas de alta definición.',
    icon: '/home/slideSection/1.svg',
    productPhoto: '/home/slideSection/1.png',
    to: '/tvs'
  },
  {
    id: 'productSlide2',
    name: 'Aires',
    description: 'La nueva generación en climatización.',
    icon: '/home/slideSection/2.svg',
    productPhoto: '/home/slideSection/2.png',
    to: '/aires'
  },
  {
    id: 'productSlide3',
    name: 'Bebederos',
    description: 'La evolución en dispensadores de agua.',
    icon: '/home/slideSection/3.svg',
    productPhoto: '/home/slideSection/3.png',
    to: '/dispensadores'
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
        transition={{ duration: 1, delay: 0.2 }}
        className=' flex  gap-6 h-[30rem]'
      >
        <div className=' h-full w-full  bg-interbrasGray flex justify-center items-center rounded-3xl  overflow-hidden' ref={emblaRef}>
          <div className=' size-full '>

            {
            productsSlide.map((product) => (
              <img
                key={product.id}
                src={product.productPhoto}
                alt=''
                className=' h-full mx-auto'
              />
            ))
            }
          </div>

        </div>
        <div className='flex flex-col gap-3'>
          {
              productsSlide.map((product, index) => (
                <ProductItemCard
                  to={
                    product.to
                  }
                  key={product.id}
                  active={
                    index === selectedIndex
                  }
                  name={product.name}
                  description={product.description}
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
      </motion.section>

    </>
  )
}
