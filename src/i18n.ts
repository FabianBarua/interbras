import i18next from 'i18next'
import es from './shared/translations/es/global.json'
import pt from './shared/translations/pt/global.json'

await i18next.init({
  interpolation: {
    escapeValue: false
  },
  resources: {
    es: { global: es },
    pt: { global: pt }
  },
  lng: 'es'
})

export default i18next
