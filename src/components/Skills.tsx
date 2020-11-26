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
          <img src='./img/html5.png' alt='' />
          <div className='html content'>
            <h1>HTML</h1>
            <h3>URL History</h3>
            <h3>Fetch Storage</h3>
            <h3>FormData File</h3>
          </div>
        </article>
        <article className='sass'>
          <img src='./img/sass.png' alt='' />
          <div className='sass content'>
            <h1>SCSS</h1>
            <h3>Grid Flex</h3>
            <h3>Loop Func</h3>
            <h3>Mixin Extend</h3>
          </div>
        </article>
        <article className='javascript'>
          <img src='./img/javascript.png' alt='' />
          <div className='javascript content'>
            <h1>Javascript</h1>
            <h4>Execution Context This</h4>
            <h4>Event loop Task Queue</h4>
            <h4>Prototype Class Promise</h4>
            <h4>DOM UI Event</h4>
          </div>
        </article>
        <article className='typescript'>
          <img src='./img/typescript.png' alt='' />
          <div className='typescript content'>
            <h1>Typescript</h1>
            <h4>Interface Type Aliases</h4>
            <h4>Generic Optional</h4>
            <h4>Assertion Guard</h4>
            <h4>Utility Types Enum</h4>
          </div>
        </article>
        <article className='react'>
          <img src='./img/react.png' alt='' />
          <div className='react content'>
            <h1>React</h1>
            <h3>Hook</h3>
            <h4>Component Props</h4>
            <h4>SPA Testing</h4>
            <h4>Redux</h4>
          </div>
        </article>
        <article className='node'>
          <img src='./img/node.png' alt='' />
          <div className='node content'>
            <h1>Node JS</h1>
          </div>
        </article>
        <article className='webpack'>
          <img src='./img/webpack.png' alt='' />
          <div className='webpack content'>
            <h1>Webpack</h1>
            <h3>Babel</h3>
            <h3>Loder</h3>
            <h3>Plugin</h3>
          </div>
        </article>
        <article className='git'>
          <img src='./img/git.png' alt='' />
          <div className='git content'>
            <h1>Git</h1>
            <h4>Commit Status</h4>
            <h4>Branch Merge</h4>
            <h4>Push Pull Clone</h4>
            <h4>Reset Revert</h4>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Skills;
