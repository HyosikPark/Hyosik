import React from 'react';
import './About.scss';
import { CSSTransition } from 'react-transition-group';

const About = () => {
  return (
      <div className='profile-cover'>
        <div className='profile-container'>
          <div className='profile-img'>
            <img src='./img/profile1.jpg' alt='' />
          </div>

          <div className='info-head'>
            <div className='info-about'>
              <h1 className='about-me'>About Me</h1>
              <h1 className='who-am-i'>
                Who Am <span>I?</span>
              </h1>
            </div>
            <img src='./img/color3.png' alt='' />
          </div>
          <div className='info-text'>
            <div className='introduce'>
              <h1 className='profile-name'>Hyosik Park</h1>
              <h3 className='profile-job'>Front-End Developer</h3>
              <p>
                Hello, I majored in Nano Mechatronics engineering at Pusan
                National University. I became interested in programming by doing
                humanoid and self-driving car projects. I mainly develop
                websites using React, TypeScript, Node JS and GraphQL. I am
                studying to improve the code through refactoring and to create a
                fast and stable website through careful testing. The goal is to
                efficiently configure logic on the front end and to design UI/UX
                creatively. Furthermore, I want to be a full-stack developer who
                can handle the back-end areas well. I want to communicate and
                work with good people. Please Contact Me!
              </p>
            </div>
            <img className='drawing-man' src='./img/drawing-man.png' alt='' />
          </div>
          <div className='site-info'>
            <div className='tech-site'>
              <h1 className='tech-blog'>
                <img
                  className='water-drop1'
                  src='./img/water-drop.png'
                  alt=''
                />
                <img
                  className='water-drop2'
                  src='./img/water-drop.png'
                  alt=''
                />
                <a
                  href='https://velog.io/@gytlr01'
                  target='_blank'
                  rel='noreferrer'
                  title='velog'
                >
                  <i className='fab fa-vimeo'></i>#Blog
                </a>
              </h1>
              <h1 className='tech-github'>
                <a
                  href='https://github.com/HyosikPark'
                  target='_blank'
                  rel='noreferrer'
                  title='github'
                >
                  <i className='fab fa-github-square'></i>GitHub
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
