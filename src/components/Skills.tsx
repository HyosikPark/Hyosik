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

      <div className='kind-of-skill'>
        <article className='html'>
          <img src='./img/html5.jpg' alt='' />
          <div className='html content'>
            <h1>HTML</h1>
            <p></p>
          </div>
        </article>
        <article className='scss'>
          <img src='./img/sass.png' alt='' />
          <div className='scss content'></div>
        </article>
        <article className='javascript'>
          <img src='./img/javascript.jpg' alt='' />
          <div className='javascript content'></div>
        </article>
        <article className='typescript'>
          <img src='./img/typescript.jpg' alt='' />
          <div className='typescript content'></div>
        </article>
        <article className='react'>
          <img src='./img/react.png' alt='' />
          <div className='react content'></div>
        </article>
        <article className='node'>
          <img src='./img/node.jpg' alt='' />
          <div className='node content'></div>
        </article>
        <article className='webpack'>
          <img src='./img/webpack.png' alt='' />
          <div className='webpack content'></div>
        </article>
        <article className='git'>
          <img src='./img/git1.png' alt='' />
          <div className='git content'></div>
        </article>
      </div>
    </div>
  );
};

export default Skills;
