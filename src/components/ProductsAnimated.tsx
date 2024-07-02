import { motion } from 'framer-motion'
import { HomeProductCard } from './HomeProductCard'
import { ProductItemHome } from '../types'
import { useMediaQuery } from '@uidotdev/usehooks'
import { useTranslation } from 'react-i18next'

const Titulo: React.FC = () => {
  const { t } = useTranslation('global')

  return (
    <>
      <p>{t('home.title.primary')}</p>
      <strong>{t('home.title.secondary')}</strong>
    </>
  )
}

const getDelay = (i: number, j: number, n: number, productRowN: number): number => {
  const mitad = Math.floor(n / 2) + 1
  const mitadRow = Math.floor(productRowN / 2) + 1
  if (i === mitad && j === mitadRow) return 0
  if (i < mitad) return ((mitad - i) * 0.2) + (mitadRow === j ? 0 : mitadRow > j ? 0.1 : 0.2)
  return ((i - mitad) * 0.2) + (mitadRow === j ? 0 : mitadRow > j ? 0.1 : 0.2)
}

const products: ProductItemHome[][] =
[
  [
    {
      name: 'airfyer',
      url: '/product/airfryer',
      photo: '/home/5.png',
      isMagic: false
    },
    {
      name: 'hervidoras',
      url: '/product/hervidoras',
      photo: '/home/13.png',
      isMagic: false
    }
  ],
  [
    {
      name: 'airfyer',
      url: '/product/airfryer',
      photo: '/home/6.png',
      isMagic: false
    },
    {
      name: 'airfyer',
      url: '/product/airfryer',
      photo: '/home/3.png',
      isMagic: false
    },
    {
      name: 'arrocera',
      url: '/product/arrocera',
      photo: '/home/11.png',
      isMagic: false
    }
  ],
  [
    {
      name: 'airfyer',
      url: '/product/airfyer',
      photo: '/home/2.png',
      isMagic: false
    },
    {
      name: 'arrocera',
      url: '/product/arrocera',
      photo: '/home/10.png',
      isMagic: false
    },
    {
      name: 'licuadora',
      url: '/product/licuadora',
      photo: '/home/7.png',
      isMagic: false
    }
  ],
  [

    {
      name: 'hervidoras',
      url: '/product/hervidoras',
      photo: '/home/13.png',
      isMagic: false
    },
    {
      name: <Titulo />,
      url: '/',
      photo: '/home/logo.png',
      isMagic: true
    },
    {
      name: 'airfyer',
      url: '/product/airfryer',
      photo: '/home/4.png',
      isMagic: false
    }
  ],
  [
    {
      name: 'licuadora',
      url: '/product/licuadora',
      photo: '/home/9.png',
      isMagic: false
    },
    {
      name: 'hervidoras',
      url: '/product/hervidoras',
      photo: '/home/12.png',
      isMagic: false
    },
    {
      name: 'airfyer',
      url: '/product/airfryer',
      photo: '/home/1.png',
      isMagic: false
    }
  ],
  [
    {
      name: 'airfyer',
      url: '/product/airfryer',
      photo: '/home/3.png',
      isMagic: false
    },
    {
      name: 'arrocera',
      url: '/product/arrocera',
      photo: '/home/11.png',
      isMagic: false
    },
    {
      name: 'airfyer',
      url: '/product/airfryer',
      photo: '/home/6.png',
      isMagic: false
    }
  ],
  [
    {
      name: 'licuadora',
      url: '/product/licuadora',
      photo: '/home/7.png',
      isMagic: false
    },
    {
      name: 'airfyer',
      url: '/product/airfryer',
      photo: '/home/1.png',
      isMagic: false
    }
  ]
]

interface Gaps {
  mobile: number[]
  sm: number[]
}

const gaps: Gaps = {
  mobile: [10, 10, 10, 20, 10, 10, 10],
  sm: [20, 20, 30, 20, 30, 20, 20]
}

export const ProductsAnimated = (): JSX.Element => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)')

  return (

    <div
      className='  h-full  w-full py-12 flex   justify-center px-5 sm:px-0  gap-3 md:gap-4 lg:gap-6 xl:gap-8 '
    >

      {
        products.map((productRow, i) => (
          <div
            key={i}
            style={
                {
                  gap: `${
                  isSmallDevice ? gaps.mobile[i] : gaps.sm[i]
                  }px`
                }
            }
            className={
              `
              flex flex-col items-center justify-center
              ${
                (i === 0 || i === 6 || i === 1 || i === 5) ? ' sm:flex hidden' : ''
              }
              `
            }
          >

            {
              productRow.map((product, j) => (
                <motion.div
                  key={j}
                  initial={
                    {
                      opacity: 0,
                      y: 10
                    }
                  }
                  animate={
                    {
                      opacity: 1,
                      y: 0
                    }
                  }
                  transition={
                        {
                          delay: getDelay(
                            i + 1,
                            j + 1,
                            products.length,
                            productRow.length
                          )
                        }
                    }
                >
                  <HomeProductCard
                    name={product.name}
                    url={product.url}
                    photo={product.photo}
                    isMagic={product.isMagic}
                  />
                </motion.div>
              ))
            }
          </div>
        ))
      }

    </div>
  )
}
