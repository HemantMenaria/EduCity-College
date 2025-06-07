/* rafce*/
import React from 'react'
import './Programs.css'
import program_1 from '../../assets/tiger.jpg'
import program_2 from '../../assets/tiger2.jpg'
import program_3 from '../../assets/anime.jpg'
import program_icon_1 from '../../assets/planet1.jpg'
import program_icon_2 from '../../assets/anime.jpg'
import program_icon_3 from '../../assets/planet.jpg'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>Post Graduation Degree</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
