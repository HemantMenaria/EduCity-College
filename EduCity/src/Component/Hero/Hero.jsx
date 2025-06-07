import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/download.jpg' /* arrow Image*/

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
      <h1>We ensure better Education</h1>
      <p>Welcome to Educity, we are one of the school which provides the best education to 
        your childrens. we mainly focuse on fundamental to the mind and bode connection so they
        can be prepared for there future education.</p>
        <button className='btn'>Explore more <img src={dark_arrow}/></button>
        </div>
    </div>
  )
}
 
export default Hero
