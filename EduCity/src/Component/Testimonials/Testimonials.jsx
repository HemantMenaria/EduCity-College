import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/planet1.jpg'
import back_icon from '../../assets/anime.jpg'
import user_1 from '../../assets/tiger.jpg'
import user_2 from '../../assets/tiger2.jpg'
import user_3 from '../../assets/logo.jpg'
import user_4 from '../../assets/anime.jpg'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;
    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className='Testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider" >
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Hemant Menaria</h3>
                                <span>Rajasthan, INDIA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque minima maxime necessitatibus
                             corrupti vero! Sapiente iste ad totam excepturi, sit amet consectetur adipisicing
                             quidem ex obcaecati, voluptate culpa error molestias quo aut. Rerum, nostrum.</p>
                    </div>            
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>rocky sharma</h3>
                                <span>MP, INDIA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque minima maxime necessitatibus
                             corrupti vero! Sapiente iste ad totam excepturi, sit amet consectetur adipisicing
                             quidem ex obcaecati, voluptate culpa error molestias quo aut. Rerum, nostrum.</p>
                    </div>            
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>janvi goswami</h3>
                                <span>Rajasthan, INDIA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque minima maxime necessitatibus
                             corrupti vero! Sapiente iste ad totam excepturi, sit amet consectetur adipisicing
                             quidem ex obcaecati, voluptate culpa error molestias quo aut. Rerum, nostrum.</p>
                    </div>            
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>sorabh soni</h3>
                                <span>Delhi, INDIA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque minima maxime necessitatibus
                             corrupti vero! Sapiente iste ad totam excepturi, sit amet consectetur adipisicing
                             quidem ex obcaecati, voluptate culpa error molestias quo aut. Rerum, nostrum.</p>
                    </div>            
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
