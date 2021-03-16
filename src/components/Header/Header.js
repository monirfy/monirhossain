import React from 'react';
import logo from '../../images/monirhossain.svg';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='row'>
          <div className='col d-flex align-items-center justify-content-between'>
            <div className='logo'>
<<<<<<< HEAD
              {/* <a as={Link} to='/' rel='noreferrer'>
=======
              <a as={Link} to='/'>
>>>>>>> 5558995a44c798117d35ebc3b95972f2772d6739
                <img src={logo} alt='' />
              </a> */}

              <Link to='/'>
                <img src={logo} alt='' />
              </Link>
            </div>
            <div className='main-menu'>
              <ul>
                <li>
<<<<<<< HEAD
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
=======
                  <a className='active' as={Link} to='/'>
                    Home
                  </a>
                </li>
                <li>
                  <a as={Link} to='/about'>About Me</a>
>>>>>>> 5558995a44c798117d35ebc3b95972f2772d6739
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
