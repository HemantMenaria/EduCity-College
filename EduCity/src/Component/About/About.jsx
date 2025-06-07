import React from 'react'
import './About.css'
import About_img from '../../assets/logo.jpg'
import play_icon from '../../assets/logo.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={About_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className='about-right'>
        <h2>Roade to Success is Healthy mind and healthy body</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Assumenda corporis reprehenderit optio molestias, exercitationem 
            similique molestiae, ipsum necessitatibus quod debitis eveniet at,
             nulla ipsa in et facilis vitae reiciendis eos.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Assumenda corporis reprehenderit optio molestias, exercitationem 
            similique molestiae, ipsum necessitatibus quod debitis eveniet at,
            nulla ipsa in et facilis vitae reiciendis eos.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Assumenda corporis reprehenderit optio molestias, exercitationem 
            similique molestiae, ipsum necessitatibus quod debitis eveniet at,
            nulla ipsa in et facilis vitae reiciendis eos.</p>
      </div> 
    </div>
  )
}

export default About
