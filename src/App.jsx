import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trustedby from './components/Trustedby'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
const App = () => {
  const[theme,setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  return (
    <div className='dark:bg-black relative'>
      <Toaster></Toaster>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero></Hero>
      <Trustedby></Trustedby>
      <Services></Services>
      <OurWork></OurWork>
      <Teams></Teams>
      <ContactUs></ContactUs>
      <Footer theme={theme}></Footer>
      
    </div>
  )
}

export default App
