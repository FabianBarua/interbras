import { motion } from 'framer-motion'
import React from 'react'

interface ProductItemHome {
  name: string | React.ReactNode
  url?: string
  photo?: string
  isMagic: boolean
}

const ProductItemCard = ({ name, photo, isMagic }: ProductItemHome): JSX.Element => {
  return (
    <div className={
        isMagic ? ' mt-4' : ''
    }
    >

      <div className={
        ` ${
            isMagic ? '  mx-2' : ''
            } p-4 size-32 flex justify-center items-center rounded-2xl bg-interbrasGreen`
        }
      >
        <img
          src={
            photo
        } alt=''
        />
      </div>
      {
        isMagic && (
          <p className=' text-center mt-3 leading-5 text-lg'>
            {name}
          </p>
        )
      }
    </div>
  )
}

const Titulo: React.FC = () => {
  return (
    <>
      <p> Tu marca</p>
      <strong>favorita</strong>
    </>
  )
}

export const Home: React.FC = () => {
  const products: ProductItemHome[][] =
  [
    [
      {
        name: 'airfyer',
        url: '/airfryer',
        photo: '/home/5.png',
        isMagic: false
      },
      {
        name: 'kettle',
        url: '/kettle',
        photo: '/home/13.png',
        isMagic: false
      }
    ],
    [
      {
        name: 'airfyer',
        url: '/airfryer',
        photo: '/home/6.png',
        isMagic: false
      },
      {
        name: 'airfyer',
        url: '/airfryer',
        photo: '/home/3.png',
        isMagic: false
      },
      {
        name: 'arrocera',
        url: '/arrocera',
        photo: '/home/11.png',
        isMagic: false
      }
    ],
    [
      {
        name: 'airfyer',
        url: '/airfyer',
        photo: '/home/2.png',
        isMagic: false
      },
      {
        name: 'arrocera',
        url: '/arrocera',
        photo: '/home/10.png',
        isMagic: false
      },
      {
        name: 'licuadora',
        url: '/licuadora',
        photo: '/home/7.png',
        isMagic: false
      }
    ],
    [

      {
        name: 'kettle',
        url: '/kettle',
        photo: '/home/13.png',
        isMagic: false
      },
      {
        name: <Titulo />,
        url: '/',
        photo: '/home/logo.svg',
        isMagic: true
      },
      {
        name: 'airfyer',
        url: '/airfryer',
        photo: '/home/4.png',
        isMagic: false
      }
    ],
    [
      {
        name: 'licuadora',
        url: '/licuadora',
        photo: '/home/9.png',
        isMagic: false
      },
      {
        name: 'kettle',
        url: '/kettle',
        photo: '/home/12.png',
        isMagic: false
      },
      {
        name: 'airfyer',
        url: '/airfryer',
        photo: '/home/1.png',
        isMagic: false
      }
    ],
    [
      {
        name: 'airfyer',
        url: '/airfryer',
        photo: '/home/3.png',
        isMagic: false
      },
      {
        name: 'arrocera',
        url: '/arrocera',
        photo: '/home/11.png',
        isMagic: false
      },
      {
        name: 'airfyer',
        url: '/airfryer',
        photo: '/home/6.png',
        isMagic: false
      }
    ],
    [
      {
        name: 'licuadora',
        url: '/licuadora',
        photo: '/home/7.png',
        isMagic: false
      },
      {
        name: 'airfyer',
        url: '/airfryer',
        photo: '/home/1.png',
        isMagic: false
      }
    ]
  ]

  const gaps: number[] = [20, 20, 30, 20, 30, 20, 20]

  const getDelay = (i: number, j: number, n: number, productRowN: number): number => {
    const mitad = Math.floor(n / 2) + 1
    const mitadRow = Math.floor(productRowN / 2) + 1
    if (i === mitad && j === mitadRow) return 0 + 0.5
    if (i < mitad) return ((mitad - i) * 0.2) + (mitadRow === j ? 0 : mitadRow > j ? 0.1 : 0.2) + 0.2
    return ((i - mitad) * 0.2) + (mitadRow === j ? 0 : mitadRow > j ? 0.1 : 0.2) + 0.2
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className=' h-full  w-full py-12 flex  justify-center gap-10  '
    >

      {
        products.map((productRow, i) => (
          <div
            key={i}
            style={
                {
                  gap: `${gaps[i]}px`
                }
            }
            className='flex flex-col  items-center justify-center'
          >

            {
              productRow.map((product, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
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
                  <ProductItemCard
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

    </motion.div>
  )
}
