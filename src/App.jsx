import Aos from 'aos'
import './App.css'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import './i18n.js'
import { useTranslation } from 'react-i18next'
import { useTheme } from './hooks/useTheme'

function App({
  children,
}) {
  const { i18n } = useTranslation()
  useEffect(() => {
    document.documentElement.lang = i18n.language
    document.dir = i18n.dir()
    Aos.init({
      once: true,
    })
  }, [i18n.language])

  const {darkMode} = useTheme();

  return (
    <>
      {children}
    </>
  )
}

export default App
