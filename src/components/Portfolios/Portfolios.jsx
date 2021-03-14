import React, { useEffect, useState } from 'react';
import portfoliosData from '../../portfoliosData/portfoliosData.json';
import Portfolio from '../Portfolio/Portfolio';

const Portfolios = () => {
  const [portfolio, setPortfolios] = useState([]);
  useEffect(() => {
    setPortfolios(portfoliosData);
  }, []);

  return (
    <div className="container">
      <div className="row g-3">
        {portfolio.map(portfolio => (
          <Portfolio key={portfolio.id} portfolio={portfolio} />
        ))}
      </div>
    </div>
  );
};

export default Portfolios;
