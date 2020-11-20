import React, { useCallback, useState } from 'react';
import './NavBar.scss';

const NavBar = () => {
  const [sideBar, setSideBar] = useState(false);

  const openSideBar = useCallback(() => {
    setSideBar((prev) => !prev);
  }, []);

  return (
    <nav className='nav-container'>
      <div className='logo'>
        <h1>Hyosik.P</h1>
      </div>
      <ul className={sideBar ? 'nav-list sidebar' : 'nav-list'}>
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
        onClick={openSideBar}
        className={sideBar ? 'fas fa-times' : 'fas fa-bars'}
      ></i>
    </nav>
  );
};

export default NavBar;
