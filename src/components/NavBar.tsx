import React, { useCallback, useEffect, useState } from 'react';
import './NavBar.scss';

const NavBar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [changeClassName, setChangeClassName] = useState(false);

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
        <li className='home'>Home</li>
        <li className='about'>
          About
          <img className='red-circle' src='./img/red-circle.png' alt='' />
        </li>
        <li className='skills'>Skills</li>
        <li className='project'>Project</li>
        <li className='contact'>
          Contact
          <img className='balloon' src='./img/balloon.png' alt='' />
        </li>
      </ul>
      <i
        onClick={toggleSideBar}
        className={sideBar ? 'fas fa-times' : 'fas fa-bars'}
      ></i>
    </nav>
  );
};

export default React.memo(NavBar);
