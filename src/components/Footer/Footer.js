import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

library.add(fab);

const Footer = () => (
  <footer className="footer py-100">
    <div className="container">
      <ul>
        <li>
          <a href="https://github.com/monirfy/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/monirfy/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/monirfy/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </li>
        <li>
          <a href="https://facebook.com/monirfy/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </a>
        </li>
      </ul>
      <p className="lead">Copyright &copy; 2021 by Monir Hossain</p>
    </div>
  </footer>
);

export default Footer;
