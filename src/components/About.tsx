import React, { useEffect } from 'react';
import './About.scss';

const About = () => {
  useEffect(() => {
    document.title = 'Hyosik portfolio | About';
  }, []);
  return (
    <div className='profile-cover'>
      <div className='profile-container'>
        <div className='profile-img'>
          <img
            src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365474/profile1_ec7mch.jpg'
            alt=''
          />
        </div>

        <div className='info-head'>
          <header className='info-about'>
            <h1 className='about-me'>About Me</h1>
            <h1 className='who-am-i'>
              Who Am <span>I?</span>
            </h1>
          </header>
          <img
            src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365472/color3_arwiwf.png'
            alt=''
          />
        </div>
        <div className='info-text'>
          <main className='introduce'>
            <h1 className='profile-name'>Hyosik Park</h1>
            <h3 className='profile-job'>Front-End Developer</h3>
            <p>
              Hello, I majored in Nano Mechatronics engineering at Pusan
              National University. I became interested in programming by doing
              humanoid and self-driving car projects. I mainly develop websites
              using React, TypeScript, Node JS and GraphQL. I am studying to
              improve the code through refactoring and to create a fast and
              stable website through careful testing. The goal is to efficiently
              configure logic and to design UI/UX creatively. Furthermore, I
              want to be a full-stack developer who can handle the front,
              back-end well. I want to communicate and work with good people.
              Please Contact Me!
            </p>
          </main>
          <img
            className='drawing-man'
            src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365472/drawing-man_p2bgqx.png'
            alt=''
          />
        </div>
        <footer className='site-info'>
          <div className='tech-site'>
            <h1 className='tech-blog'>
              <img
                className='water-drop1'
                src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365475/water-drop_ovmkwf.png'
                alt=''
              />
              <img
                className='water-drop2'
                src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365475/water-drop_ovmkwf.png'
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
        </footer>
      </div>
    </div>
  );
};

export default About;
