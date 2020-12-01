import React, { useCallback } from 'react';
import './Contact.scss';

const Contact = () => {
  const onSubmit = useCallback((e) => {}, []);
  return (
    <div className='contact-cover'>
      <div className='contact-container'>
        <div className='info-head'>
          <div className='info-contact'>
            <p className='get-in-touch'>GET IN TOUCH</p>
            <p className='contact'>CONTACT</p>
          </div>
        </div>
        <div className='personal-info'>
          <h1>MY-INFOMATION</h1>
          <div className='address'>
            <p>
              61, Daecheon-ro 103beon-gil, Haeundae-gu, Busan, Republic of Korea
            </p>
          </div>
          <div className='site-info'>
            <h4>
              Email :{' '}
              <a href='mailto:hyosik.dev@gmail.com'>hyosik.dev@gmail.com</a>
            </h4>
            <h4>
              Blog :{' '}
              <a
                href='https://velog.io/@gytlr01'
                target='_blank'
                rel='noreferrer'
              >
                https://velog.io/@gytlr01
              </a>
            </h4>
            <h4>
              GitHub :{' '}
              <a
                href='https://github.com/HyosikPark'
                target='_blak'
                rel='noreferrer'
              >
                https://github.com/HyosikPark
              </a>
            </h4>
          </div>
          <div className='contact-info'>
            <p>+82-10-6660-1482</p>
          </div>
        </div>
        <div className='send-email'>
          <form
            onSubmit={onSubmit}
            className='gform'
            method='POST'
            action='https://script.google.com/macros/s/AKfycbxciry4McykOZFMc7ZNlvUywGgLekhRq5H4V992Yw/exec'
          >
            <ul>
              <li>
                <label htmlFor='name'>
                  <h4>Name</h4>
                </label>
                <input
                  name='name'
                  id='name'
                  type='text'
                  placeholder='What is your name?'
                  required
                />
              </li>
              <li>
                <label htmlFor='email'>
                  <h4>Email</h4>
                </label>
                <input
                  name='email'
                  id='email'
                  type='email'
                  placeholder='What is your email?'
                  required
                />
              </li>
              <li>
                <label htmlFor='subject'>
                  <h4>Subject</h4>
                </label>
                <input
                  name='subject'
                  id='subject'
                  type='text'
                  placeholder='Subject'
                  required
                />
              </li>
              <li>
                <label htmlFor='content'>
                  <h4>Content</h4>
                </label>
                <textarea
                  name='content'
                  id='content'
                  cols={30}
                  rows={10}
                  required
                ></textarea>
              </li>
              <button>Submit</button>
              <div style={{ display: 'none' }} className='thankyou_message'>
                <h2>
                  <em>Thanks</em> for contacting us! We will get back to you
                  soon!
                </h2>
              </div>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
