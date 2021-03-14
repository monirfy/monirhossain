import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faDownload } from '@fortawesome/free-solid-svg-icons';
import './Portfolio.css';

const Portfolio = (props) => {
  const { name, tags, image, preview, download } = props.portfolio;
  return (
    <div className='col-lg-4 col-md-6'>
      <div className='portfolio'>
        <div className='portfolio-header'>
          <a href={preview} target='_blank' rel='noreferrer noopener'>
            <img src={image} alt='' />
          </a>
        </div>
        <div className='portfolio-body'>
          <span>{tags}</span>
          <a href={preview} target='_blank' rel='noreferrer noopener'>
            <h3>{name}</h3>
          </a>
        </div>
        <div className='portfolio-footer'>
          <div className='portfolio-price'>
            <FontAwesomeIcon icon={faGift} className='mr-10' />
            Free
          </div>
          <div className='portfolio-links'>
            <a href={download} target='_blank' rel='noreferrer noopener' className='portfolio-download'>
              <FontAwesomeIcon icon={faDownload} />
            </a>
            <a href={preview} target='_blank' rel='noreferrer noopener' className='portfolio-preview'>
              Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
