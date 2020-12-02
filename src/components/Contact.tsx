import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <>
      <div className='contact-cover'>
        <div className='contact-container'>
          <div className='info-head'>
            <img className='right' src='./img/writinghand.png' alt='' />
            <img className='left' src='./img/letter.png' alt='' />
            <div className='info-contact'>
              <p className='get-in-touch'>GET IN TOUCH</p>
              <p className='contact'>CONTACT</p>
            </div>
          </div>
          <div className='personal-info'>
            <h1>INFOMATION</h1>
            <ul>
              <li className='address'>
                <img src='/img/film.svg' alt='' />
                <h3>ADDRESS</h3>
                <p>
                  61, Daecheon-ro 103beon-gil, Haeundae-gu, <br /> Busan,
                  Republic of Korea
                </p>
              </li>
              <li className='site-info'>
                <img src='/img/film.svg' alt='' />
                <h4>
                  <a href='mailto:hyosik.dev@gmail.com'>hyosik.dev@gmail.com</a>
                </h4>
              </li>
              <li className='contact-info'>
                <img src='/img/film.svg' alt='' />
                <p>+82-10-6660-1482</p>
              </li>
            </ul>
          </div>
          <div className='send-email'>
            <form
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
              </ul>
              <div style={{ display: 'none' }} className='thankyou_message'>
                <div className='toast-message'>
                  <p>The mail has been sent successfully</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
