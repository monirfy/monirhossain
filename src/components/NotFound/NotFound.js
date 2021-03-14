import React from 'react';
import './NotFound.css';
const NotFound = () => {
  return (
    <section className='not-found'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 mx-auto text-center'>
            <h1>404</h1>
            <p>Page not found 😭</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
