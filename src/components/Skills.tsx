import React from 'react';
import './Skills.scss';

const Skills = () => {
  return (
    <div className='skills-container'>
      <div className='info-head'>
        <div className='info-skills'>
          <p className='what-i-do'>SKILLS</p>
          <p className='intro-skills'>HERE ARE SOME OF MY SKILLS</p>
        </div>
      </div>
      <div className='main-img'>
        <img className='javascript' src='/img/skill-frame.png' alt='' />
      </div>
      <div className='sub-img'>
        <img className='typescript' src='/img/skill-frame.png' alt='' />
        <img className='react' src='/img/skill-frame.png' alt='' />
        <img className='node-js' src='/img/skill-frame.png' alt='' />
      </div>
    </div>
  );
};

export default Skills;
