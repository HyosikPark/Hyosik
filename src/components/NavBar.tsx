import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [changeClassName, setChangeClassName] = useState(false);
  const [Circle, setCircle] = useState({
    home: true,
    about: false,
    skills: false,
    project: false,
    contact: false,
  });

  const displayCircle = useCallback((e) => {
    setCircle({
      home: false,
      about: false,
      skills: false,
      project: false,
      contact: false,
      [e.target.className]: true,
    });
  }, []);

  const toggleSideBar = useCallback(() => {
    setSideBar((prev) => !prev);
  }, []);

  const closeSideBar = useCallback(() => {
    setSideBar(false);
  }, []);

  const changeToNavBar = useCallback(() => {
    if (window.innerWidth >= 768) {
      setSideBar(false);
    }
    if (window.innerWidth < 768) {
      setChangeClassName(true);
    } else {
      setChangeClassName(false);
    }
  }, []);

  useEffect(() => {
    changeToNavBar();
  }, [changeToNavBar]);

  window.addEventListener('resize', changeToNavBar);

  return (
    <nav className='nav-container'>
      <div className='logo'>
        <h1>Hyosik.P</h1>
      </div>
      <ul
        onClick={closeSideBar}
        className={changeClassName ? 'sidebar' : 'nav-list'}
        style={sideBar ? { height: '40vh' } : undefined}
      >
        <Link to='/home'>
          <li className='home' onClick={displayCircle}>
            Home
            {Circle.home && (
              <img className='red-circle' src='./img/red-circle.png' alt='' />
            )}
          </li>
        </Link>
        <Link to='/about'>
          <li className='about' onClick={displayCircle}>
            About
            {Circle.about && (
              <img className='red-circle' src='./img/red-circle.png' alt='' />
            )}
          </li>
        </Link>
        <Link to='/skills'>
          <li className='skills' onClick={displayCircle}>
            Skills
            {Circle.skills && (
              <img className='red-circle' src='./img/red-circle.png' alt='' />
            )}
          </li>
        </Link>
        <Link to='/project'>
          <li className='project' onClick={displayCircle}>
            Project
            {Circle.project && (
              <img className='red-circle' src='./img/red-circle.png' alt='' />
            )}
          </li>
        </Link>
        <Link className='contact-link' to='/contact'>
          <li className='contact' onClick={displayCircle}>
            Contact
            {Circle.contact && (
              <img className='red-circle' src='./img/red-circle.png' alt='' />
            )}
          </li>
        </Link>
        <img className='balloon' src='./img/balloon.png' alt='' />
      </ul>
      <i
        onClick={toggleSideBar}
        className={sideBar ? 'fas fa-times' : 'fas fa-bars'}
      ></i>
    </nav>
  );
};

export default React.memo(NavBar);
