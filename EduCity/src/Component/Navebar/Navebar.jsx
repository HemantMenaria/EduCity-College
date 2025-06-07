import React, { useEffect, useState } from 'react';
import './Navebar.css';
import logo from '../../assets/logo.jpg';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import menu from '../../assets/logo.jpg';


const Navebar = () => {

  const [sticky, setsticky] = useState(false)

  useEffect(() =>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    })
  },{});

  const [homeMenu, setHomeMenu] = useState(true);
  const toggleMenu = ()=>{
    homeMenu ? setHomeMenu(false) : setHomeMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="LOGO" className='logo' />
      <ul className={homeMenu? '':'js-home-menu'}>
        <li><Link to='hero' smooth={true} offset={0}  duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260}  duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150}  duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260}  duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260}  duration={500}>Testimonial</Link></li>
        <li><Link to='contact' smooth={true} offset={-260}  duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navebar
