import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Portfolios from './components/Portfolios/Portfolios';
import Promo from './components/Promo/Promo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      
      <Switch>
        <Route exact path='/'>
          <Header></Header>
          <Promo></Promo>
          <Portfolios></Portfolios>
          <Footer></Footer>
        </Route>
        <Route exact path='/about'>
          <Header></Header>
          <About></About>
          <Footer></Footer>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
