import { motion } from 'framer-motion'
import React, { useState } from 'react'

const LanguageButton: React.FC<
{ flag: string
  code: string
  onClick?: () => void
}> = ({ flag, code, onClick }) => {
  return (
    <button onClick={onClick} className=' rounded-lg bg-interbrasGreen hover:bg-interbrasGreen/80 transition-colors  px-2 py-1 flex justify-center items-center gap-2'>
      <img src={flag} alt={`bandera de ${code}`} />
      {code}
    </button>
  )
}

interface LanguageInterface {
  flag: string
  code: string
}

export const SwitchLanguage: React.FC = () => {
  const languages = [{
    flag: '/paraguay_flag.svg',
    code: 'PY'
  },
  {
    flag: '/brasil_flag.svg',
    code: 'BR'
  }]
  const [language, setLanguage] = useState<LanguageInterface>(languages[0])
  const [open, setOpen] = useState(false)

  return (
    <div className=' relative'>
      <div className=' text-white'>
        <LanguageButton
          flag={language.flag}
          code={language.code}
          onClick={() => setOpen(!open)}
        />
      </div>

      {
        open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className=' absolute flex flex-col gap-1 top-[120%] text-white'
          >
            {
              languages.map((lang) => (
                <LanguageButton
                  key={lang.code}
                  flag={lang.flag}
                  code={lang.code}
                  onClick={() => {
                    setLanguage(lang)
                    setOpen(false)
                  }}
                />
              ))
            }
          </motion.div>
        )
      }

    </div>
  )
}
