import Aos from 'aos'
import './App.css'
import Footer from './parts/Footer'
import Header from './parts/Header'
import Main from './parts/Main'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import './i18n.js'

function App() {
  useEffect(()=>{
    Aos.init({
      once: true
    })
  },[])

  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App
