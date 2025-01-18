import Aos from 'aos'
import './App.css'
import Footer from './parts/Footer'
import Header from './parts/Header'
import Main from './parts/Main'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import './i18n.js'
import { useTranslation } from 'react-i18next'

function App() {
  const {i18n} = useTranslation()
  useEffect(()=>{
    document.documentElement.lang = i18n.language
    document.dir = i18n.dir()
    Aos.init({
      once: true
    })
  },[i18n.language])


  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App
