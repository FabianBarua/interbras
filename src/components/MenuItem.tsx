
import { motion } from 'framer-motion'
import React from 'react'

interface MenuItemProps {
  selected: boolean
  title: string
  variants: any
  onClick: () => void
}

export const MenuItem: React.FC<MenuItemProps> = ({ title, variants, onClick, selected }) => {
  return (
    <motion.li
      onClick={onClick}
      variants={variants}
      className={
        `
        cursor-pointer
        ${selected ? 'text-white' : 'text-white/50'}
        `
      }
    >
      {title}
    </motion.li>
  )
}
