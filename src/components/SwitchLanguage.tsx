import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { switchLanguage } from '../shared/utils/translate-utils'

const LanguageButton: React.FC<
{ flag: string
  code: string
  onClick?: () => void
}> = ({ flag, code, onClick }) => {
  return (
    <button onClick={onClick} className=' rounded-lg bg-interbrasGreen-500 hover:bg-interbrasGreen-500/80 transition-colors  px-2 py-1 flex justify-center items-center gap-2'>
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
    code: 'PY',
    lang: 'es'
  },
  {
    flag: '/brasil_flag.svg',
    code: 'BR',
    lang: 'pt'
  }]
  const storedLang = localStorage.getItem('lang')
  const [language, setLanguage] = useState<LanguageInterface>(
    languages[
      storedLang === 'pt' ? 1 : 0
    ]
  )
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // check language preference on chrome
    const lang = navigator.language?.split('-')[0]
    if (lang === 'pt') {
      setLanguage(languages[1])
      switchLanguage('pt')
    } else {
      setLanguage(languages[0])
      switchLanguage('es')
    }
  }, [])

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
                    switchLanguage(lang.lang)
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
