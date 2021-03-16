import React from 'react';
import logo from '../../images/monirhossain.svg';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
       
          <div className='col d-flex align-items-center justify-content-between'>
            <div className='logo'>
              <Link to='/'>
                <img src={logo} alt='' />
              </Link>
            </div>
            <div className='main-menu'>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
              </ul>
            </div>
          </div>
    
      </div>
    </header>
  );
};

export default Header;
