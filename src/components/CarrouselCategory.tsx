import { useDataStore } from '../shared/stores/useData'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { useState } from 'react'

export const CarrouselCategory: React.FC = () => {
  const { categories } = useDataStore()

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 100
  }, [Autoplay()])
  const [selectedIndex, setSelectedIndex] = useState(0)

  emblaApi?.on('select', () => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }
  )

  return (
    <>
      <h3 className=' text-center text-3xl mt-16 mb-8 text-black/80 font-light'>Tambien te puede interesar</h3>
      <div
        ref={emblaRef}
        className='  w-full flex overflow-hidden '
      >
        <div className=' flex items-center w-full justify-center'>
          {
    categories.map((item, index) => (
      <div
        key={item.id}
        className=' py-4'
      >
        <div className={
            ` 
            ${
            index === selectedIndex
              ? ' bg-interbrasGray  scale-105 border-interbrasGreen-500'
              : 'bg-[#E7E7E7]'
            }
             
            mx-2 duration-1000
            py-6 transition-all w-72  h-min flex items-center flex-col rounded-3xl border-2  
            `
        }
        >

          <h1 className={
            `
             text-2xl transition-colors font-medium text-center
             ${
                index === selectedIndex ? ' text-white' : 'text-[#636363]'
             }
            `
          }
          >
            {item.name}
          </h1>
          <p className={
            `
            ${
              index === selectedIndex ? ' text-white' : 'text-[#787878]'
            }
            text-xl  transition-colors duration-100   font-light text-center
            `
          }
          >
            {item.description}
          </p>
          <button className={
            `
            ${
                index === selectedIndex ? ' bg-interbrasGreen-500' : 'bg-[#A2A2A2]'
            }
            transition-colors  buttonMore bg-interbrasGreen-500 w-min font-light text-nowrap mt-2 mx-auto text-white px-4 py-1 rounded-xl
            `
          }
          >
            Más información
          </button>
        </div>

      </div>
    )
    )
    }
        </div>

      </div>
    </>
  )
}
