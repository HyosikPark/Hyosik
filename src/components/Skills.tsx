import React, { useEffect } from 'react';
import './Skills.scss';

const Skills = () => {
  useEffect(() => {
    document.title = 'Hyosik portfolio | Skills';
  }, []);
  return (
    <div className='skills-cover'>
      <div className='skills-container'>
        <div className='info-head'>
          <header className='info-skills'>
            <p className='what-i-do'>SKILLS</p>
            <p className='intro-skills'>HERE ARE SOME OF MY SKILLS</p>
          </header>
        </div>
        <div className='flower-img'>
          <img
            src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365471/book_lemwfl.png'
            alt=''
          />
        </div>
        <main className='kind-of-skill'>
          <article className='html'>
            <img
              src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365472/html5_yi56ht.png'
              alt=''
            />
            <div className='html content'>
              <h1>HTML</h1>
              <h3>URL History</h3>
              <h3>Fetch Storage</h3>
              <h3>FormData Worker</h3>
            </div>
          </article>
          <article className='sass'>
            <img
              src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365474/sass_w2d1jb.png'
              alt=''
            />
            <div className='sass content'>
              <h1>SCSS</h1>
              <h3>Grid Flex</h3>
              <h3>Loop Func</h3>
              <h3>Mixin Extend</h3>
            </div>
          </article>
          <article className='javascript'>
            <img
              className='sitting-man'
              src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365475/sitting-man_n9cggo.svg'
              alt=''
            />
            <img
              src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365472/javascript_vxtbj8.png'
              alt=''
            />
            <div className='javascript content'>
              <h1>Javascript</h1>
              <h4>Execution Context This</h4>
              <h4>Event loop Task Queue</h4>
              <h4>Prototype Class Promise</h4>
              <h4>DOM UI Event</h4>
            </div>
          </article>
          <article className='typescript'>
            <img
              src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365475/typescript_cstunu.png'
              alt=''
            />
            <div className='typescript content'>
              <h1>Typescript</h1>
              <h4>Interface Type Aliases</h4>
              <h4>Generic Optional</h4>
              <h4>Union Extends</h4>
              <h4>Utility Types</h4>
            </div>
          </article>
          <article className='react'>
            <img
              src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365474/react_lfpfuq.png'
              alt=''
            />
            <div className='react content'>
              <h1>React</h1>
              <h3>Hook</h3>
              <h4>Component Props</h4>
              <h4>SPA Testing</h4>
              <h4>Redux</h4>
            </div>
          </article>
          <article className='node'>
            <img
              src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365473/node_tznefb.png'
              alt=''
            />
            <div className='node content'>
              <h1>Node JS</h1>
              <h3>Next JS</h3>
              <h3>Express</h3>
              <h3>Mongoose</h3>
            </div>
          </article>
          <article className='webpack'>
            <img
              src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365475/webpack_sgjncr.png'
              alt=''
            />
            <div className='webpack content'>
              <h1>GraphQL</h1>
              <br />
              <h3>Apollo-Client</h3>
              <h3>Apollo-Server</h3>
            </div>
          </article>
          <article className='git'>
            <img
              src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365471/git_x7lkum.png'
              alt=''
            />
            <div className='git content'>
              <h1>Git</h1>
              <h4>Commit Status</h4>
              <h4>Branch Merge</h4>
              <h4>Push Pull Clone</h4>
              <h4>Reset Revert</h4>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

export default React.memo(Skills);
