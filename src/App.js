// Import React


// Import React Router elements
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

// Import components
import Home from './components/Layout/Home';
import NasaApod from './components/Apps/NasaApod';
import WeatherApp from './components/Apps/WeatherApp';
import Animations from './components/Layout/Animations';
import Footer from './components/Layout/Footer';

// Import CSS
import './App.css';

function App() {
  return (
    <div className='container-fluid'>
      <Router>

        <ul className='nav mb-4'>
          <li className='nav-item'>
            <NavLink className='nav-link' activeClassName='nav-link-active' exact to='/'>Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' activeClassName='nav-link-active' to='/nasa'>NASA - APOD</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' activeClassName='nav-link-active' to='/weather'>Weather App</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' activeClassName='nav-link-active' to='/animations'>Animations</NavLink>
          </li>
        </ul>

        <Switch>
          <Route path='/nasa'>
            <NasaApod />
          </Route>
          <Route path='/weather'>
            <WeatherApp />
          </Route>
          <Route path='/animations'>
            <Animations />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
