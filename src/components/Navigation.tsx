import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'
import React from 'react'
import { DondeEstamos } from './DondeEstamos'
import { ProductosHeader } from './ProductosHeader'
import { QuienesSomos } from './QuienesSomos'
import { SwitchLanguage } from './SwitchLanguage'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

interface NavigationProps {
  isOpen: boolean
}

const variantsItems = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

export const Navigation: React.FC<NavigationProps> = ({ isOpen }) => {
  const [selected, setSelected] = React.useState<string | null>(null)

  return (
    <>
      <motion.div
        style={
    {
      pointerEvents: isOpen ? 'all' : 'none'
    }
  }
        className=' absolute top-16 left-4 w-[calc(100dvw-2rem)]  flex flex-col items-center justify-center h-auto ' variants={variants}
      >
        <ul className=' flex gap-3 text-xl w-96 h-min flex-wrap items-center justify-center'>
          {itemIds.map(i => (
            <MenuItem
              key={i.id}
              title={i.title}
              variants={variantsItems}
              onClick={() => setSelected(i.id)}
            />
          ))}
          <motion.div
            variants={variantsItems}
            className=' fixed top-5 right-5'
          >
            <SwitchLanguage theme='white' />
          </motion.div>
        </ul>
        <motion.div
          variants={variantsItems}
          className=' h-[calc(100dvh-180px)]  mt-5'
        >
          {
            itemIds.map(i => {
              if (selected === i.id) {
                return (
                  <motion.div
                    className=' size-full  '
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    key={i.id}
                  >
                    <i.Component />
                  </motion.div>
                )
              }
              return null
            })
          }
        </motion.div>
      </motion.div>

    </>
  )
}

const itemIds = [
  {
    id: 'headerSectionMobile1',
    title: 'Donde estamos',
    Component: DondeEstamos
  },
  {
    id: 'headerSectionMobile2',
    title: 'Productos',
    Component: () => {
      return (
        <ProductosHeader clicked={() => {
          console.log('clicked')
        }}
        />
      )
    }
  },
  {
    id: 'headerSectionMobile3',
    title: 'Quienes somos',
    Component: QuienesSomos
  }
]
