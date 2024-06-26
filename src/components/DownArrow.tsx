import React from 'react'

interface Props {
  className: string
  style: React.CSSProperties
}

export const DownArrow: React.FC<Props> = ({
  className,
  style
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    className={className}
    style={style}
  >
    <path d='M18.71 8.21a1 1 0 0 0-1.42 0l-4.58 4.58a1 1 0 0 1-1.42 0L6.71 8.21a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41l4.59 4.59a3 3 0 0 0 4.24 0l4.59-4.59a1 1 0 0 0 0-1.41' />
  </svg>
)
