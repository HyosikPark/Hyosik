import React from 'react';
import './Project.scss';

const Project = () => {
  return (
    <div className='project-cover'>
      <div className='project-container'>
        <div className='info-head'>
          <div className='info-project'>
            <p className='challenge'>CHALLENGE</p>
            <p className='project'>PROJECT</p>
          </div>
        </div>
        <div className='kind-of-project'>
          <article className='portfolio'>
            <a
              className='portfolio-img link'
              href='https://www.youtube.com/watch?v=rCCijOgaG7w&t=3s'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365473/portfolio-site_sxdcld.png'
                alt=''
              />
            </a>
            <div className='shoppingmall-info content'>
              <div className='project-date'>
                <p>NOVEMBER 2020 | PERSONAL PROJECT |</p>
              </div>
              <div className='project-title'>
                <a
                  href='https://www.youtube.com/watch?v=rCCijOgaG7w&t=3s'
                  target='_blank'
                  rel='noreferrer'
                >
                  <h1>PORTFOLIO SITE</h1>
                </a>
              </div>
              <div className='stack-code'>
                <p>React, Typescript, SCSS</p>
                <p>
                  code:{' '}
                  <a
                    className='shoppingmall-github github'
                    href='https://github.com/HyosikPark/portfolio/tree/shoppingmall'
                    target='_blank'
                    rel='noreferrer'
                  >
                    GitHub
                  </a>{' '}
                </p>
              </div>
            </div>
          </article>
          <article className='recent-post'>
            <a
              className='shppingmall-img link'
              href='https://www.youtube.com/watch?v=zlN6aER2Vn8&t=10s'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365473/recent-post_amvcnz.png'
                alt=''
              />
            </a>
            <div className='recentpost-info content'>
              <div className='project-date'>
                <p>SEPTEMBER 2020 | PERSONAL PROJECT |</p>
              </div>
              <div className='project-title'>
                <a
                  href='https://www.youtube.com/watch?v=zlN6aER2Vn8&t=10s'
                  target='_blank'
                  rel='noreferrer'
                >
                  <h1>RECENT POST</h1>
                </a>
              </div>
              <div className='stack-code'>
                <p>React, NodeJs, GraphQL</p>
                <p>
                  code:{' '}
                  <a
                    className='recentpost-github github'
                    href='https://github.com/HyosikPark/portfolio/tree/recent-post-app'
                    target='_blank'
                    rel='noreferrer'
                  >
                    GitHub
                  </a>{' '}
                </p>
              </div>
            </div>
          </article>
          <article className='shopping-mall'>
            <a
              className='recentpost-img link'
              href='https://www.youtube.com/watch?v=rCCijOgaG7w&t=3s'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365474/shoppingmall_s6b021.png'
                alt=''
              />
            </a>
            <div className='shoppingmall-info content'>
              <div className='project-date'>
                <p>AUGUST 2020 | PERSONAL PROJECT |</p>
              </div>
              <div className='project-title'>
                <a
                  href='https://www.youtube.com/watch?v=rCCijOgaG7w&t=3s'
                  target='_blank'
                  rel='noreferrer'
                >
                  <h1>SHOPPING MALL</h1>
                </a>
              </div>
              <div className='stack-code'>
                <p>React, NodeJs</p>
                <p>
                  code:{' '}
                  <a
                    className='shoppingmall-github github'
                    href='https://github.com/HyosikPark/portfolio/tree/shoppingmall'
                    target='_blank'
                    rel='noreferrer'
                  >
                    GitHub
                  </a>{' '}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Project;
