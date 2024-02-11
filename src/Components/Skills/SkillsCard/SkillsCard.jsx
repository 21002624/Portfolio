import React from 'react'
import './SkillsCard.css';


const SkillsCard = ({title , iconurl , isActive , onClick}) => {
  return (
    <div className={`skills-card ${isActive ? "active" : ""}`}
    onClick={()=>onClick()}> 

    <div className='skill-icon'>
        <img src ={iconurl} alt=''/>
    </div>
     
      <span >{title}</span>
    </div>
  )
}

export default SkillsCard
