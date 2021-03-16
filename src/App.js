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
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Promo></Promo>
          <Portfolios></Portfolios>
        </Route>
        <Route exact path='/about'>
          <About></About>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
       <Footer></Footer>
    </Router>
  );
}

export default App;
