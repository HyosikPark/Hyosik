import React, { useCallback, useRef } from 'react';
import './Contact.scss';
import emailjs from 'emailjs-com';

const toastMessage = (elem: React.RefObject<HTMLDivElement>) => {
  if (elem.current !== null) {
    elem.current.style.display = 'block';
  }

  setTimeout(() => {
    if (elem.current !== null) {
      elem.current.style.opacity = '1';
      elem.current.style.transform = 'translateY(-50%)';
    }
  }, 50);

  setTimeout(() => {
    if (elem.current !== null) {
      elem.current.style.transform = 'translateY(-120%)';
      elem.current.style.opacity = '0';
    }
  }, 4000);
  setTimeout(() => {
    if (elem.current !== null) {
      elem.current.style.display = 'none';
      elem.current.style.transform = 'translateY(0%)';
    }
  }, 5000);
};

const Contact = () => {
  const successDiv = useRef<HTMLDivElement>(null);
  const failDiv = useRef<HTMLDivElement>(null);
  const submitBtn = useRef<HTMLButtonElement>(null);

  const sendEmail = useCallback((e) => {
    e.preventDefault();
    if (submitBtn.current !== null) {
      submitBtn.current.disabled = true;
      submitBtn.current.style.cursor = 'default';
      submitBtn.current.style.background = '#b3b1af';
    }
    emailjs
      .sendForm(
        'service_cmghvnp',
        'template_pget8bi',
        e.target,
        'user_BF4RpGzwKQCQ7HMywX4td'
      )
      .then(
        () => {
          toastMessage(successDiv);
        },
        () => {
          toastMessage(failDiv);
          setTimeout(() => {
            if (submitBtn.current !== null) {
              submitBtn.current.disabled = false;
              submitBtn.current.style.cursor = 'pointer';
              submitBtn.current.style.background = '#faeedf';
            }
          }, 2000);
        }
      );
  }, []);

  return (
    <>
      <div className='contact-cover'>
        <div className='contact-container'>
          <div className='info-head'>
            <img
              className='right'
              src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365475/writinghand_hugzw5.png'
              alt=''
            />
            <img
              className='left'
              src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365472/letter_v7trkb.png'
              alt=''
            />
            <div className='info-contact'>
              <p className='get-in-touch'>GET IN TOUCH</p>
              <p className='contact'>CONTACT</p>
            </div>
          </div>
          <div className='personal-info'>
            <h1>INFOMATION</h1>
            <ul>
              <li className='address'>
                <img
                  src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365471/film_taf3tl.svg'
                  alt=''
                />
                <h3>ADDRESS</h3>
                <p>
                  61, Daecheon-ro 103beon-gil, Haeundae-gu, <br /> Busan,
                  Republic of Korea
                </p>
              </li>
              <li className='site-info'>
                <img
                  src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365471/film_taf3tl.svg'
                  alt=''
                />
                <h4>
                  <a href='mailto:hyosik.dev@gmail.com'>hyosik.dev@gmail.com</a>
                </h4>
              </li>
              <li className='contact-info'>
                <img
                  src='https://res.cloudinary.com/dtqpivzyl/image/upload/v1607365471/film_taf3tl.svg'
                  alt=''
                />
                <p>+82-10-6660-1482</p>
              </li>
            </ul>
          </div>
          <div className='send-email'>
            <form onSubmit={sendEmail}>
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

                <button ref={submitBtn}>Submit</button>
              </ul>
              <div className='success_message message' ref={successDiv}>
                <div className='toast-success'>
                  <p>The message has been sent successfully</p>
                </div>
              </div>
              <div className='fail_message message' ref={failDiv}>
                <div className='toast-fail'>
                  <p>Failed to send message.</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Contact);
