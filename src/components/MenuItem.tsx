
import { motion } from 'framer-motion'
import React from 'react'

interface MenuItemProps {
  title: string
  variants: any
  onClick: () => void
}

export const MenuItem: React.FC<MenuItemProps> = ({ title, variants, onClick }) => {
  return (
    <motion.li
      onClick={onClick}
      variants={variants}
      className=' text-center text-white '
    >
      {title}
    </motion.li>
  )
}
