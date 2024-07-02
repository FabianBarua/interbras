import { useDataStore } from '../shared/stores/useData'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const CarrouselCategory: React.FC = () => {
  const { categories } = useDataStore()

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  }, [Autoplay()])
  const [selectedIndex, setSelectedIndex] = useState(0)

  emblaApi?.on('select', () => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }
  )

  return (
    <>
      <h3 className=' text-center text-3xl mt-28 mb-8 text-black/80 font-light'>Tambien te puede interesar</h3>
      <div
        ref={emblaRef}
        className={
          `
          w-full relative flex overflow-hidden scroller
          lg:after:w-96 after:absolute after:z-50 after:h-full after:bg-[linear-gradient(to_left,transparent_10%,#f2f2f2_80%)]
          lg:before:w-96 before:absolute before:z-50 before:h-full before:bg-[linear-gradient(to_right,transparent_10%,#f2f2f2_80%)] before:right-0
          `
        }
      >
        <div className=' flex w-full'>
          {
    categories.map((item, index) => (
      <div
        key={item.id.toString() + index.toString()}
        className={
          `
          py-4  mx-5
          no-select 
          `
        }
      >
        <div className={
            ` 
            ${
            index === selectedIndex
              ? ' bg-interbrasGray scale-110 border-interbrasGreen-500'
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
          <Link
            to={`/product/${item.id}`}
            onClick={
              () => {
                window.scrollTo(0, 0)
              }
            }
            className={
              `
              ${
                index === selectedIndex ? ' bg-interbrasGreen-500' : 'bg-[#A2A2A2]'
                }
                transition-colors  buttonMore bg-interbrasGreen-500 w-min font-light text-nowrap mt-2 mx-auto text-white px-4 py-1 rounded-xl
                `
              }
          >
            Más información

          </Link>
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
