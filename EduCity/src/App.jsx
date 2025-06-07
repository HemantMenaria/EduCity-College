import React from 'react'
import Navebar from './Component/Navebar/Navebar'
import Hero from './Component/Hero/Hero'
import Programs from './Component/Programs/Programs'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Testimonials from './Component/Testimonials/Testimonials'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navebar/>
      <Hero/>
      <div className="container"> 
        <Title title='What We Offer' />
        <Programs/>
        <Title title='About University' />
        <About/>
        <Title title='Campus Photos' />
        <Campus/>
        <Title title='Testimonials'/>
        <Testimonials/>
        <Title title='Contact Us' />
        <Contact/>
        <Footer/>
      </div>

    </div>
  )
}

export default App
