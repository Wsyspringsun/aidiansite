import './css/style.css';
import './css/bootstrap4.1.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Home from './routers/Home';
//import About from './routers/About';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./routers/Home'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./routers/About'),
  loading: Loading,
});

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </Switch>
  </Router>
);
export default App;
