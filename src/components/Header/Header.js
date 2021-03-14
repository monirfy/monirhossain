import React from 'react';
import logo from '../../images/monirhossain.svg';
import './Header.css';
const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='row'>
          <div className='col d-flex align-items-center justify-content-between'>
            <div className='logo'>
              <a href='/'>
                <img src={logo} alt='' />
              </a>
            </div>
            <div className='main-menu'>
              <ul>
                <li>
                  <a className='active' href='/'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='about/'>About Me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
