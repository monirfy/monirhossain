import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

library.add(fab);

const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      <ul>
        <li>
          <a href='https://github.com/MonirHossainPro/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </li>
        <li>
          <a href='https://twitter.com/MonirHossainPro/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/MonirHossainPro/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </li>
        <li>
          <a href='https://facebook.com/MonirHossainPro/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </a>
        </li>
        <li>
          <a href='https://instagram.com/MonirHossainPro/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
        </li>
      </ul>
      <p>Copyright &copy; 2021 by Monir Hossain</p>
    </div>
  </footer>
);

export default Footer;
