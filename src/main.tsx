import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'

import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import { ClientLayout } from './layouts/ClientLayout'

import './index.css'
import { Home } from './pages/home'
import { I18nextProvider, useTranslation } from 'react-i18next'
import i18next from './i18n.ts'
import { useTranslateStore } from './shared/stores/useTranslate.ts'

const AllRoutes: React.FC = () => {
  const location = useLocation()
  const lang = useTranslateStore(state => state.lang)
  const { i18n } = useTranslation('global')

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    i18n.changeLanguage(
      typeof lang === 'string' ? lang : 'es'
    )
  }, [lang])

  return (
    <Routes location={location}>
      <Route element={<ClientLayout />}>
        <Route element={<Home />} path='/' />
      </Route>
    </Routes>
  )
}

document.addEventListener('DOMContentLoaded', function () {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Router>
        <I18nextProvider i18n={i18next}>
          <AllRoutes />
        </I18nextProvider>
      </Router>
    </React.StrictMode>
  )
} as EventListener)
