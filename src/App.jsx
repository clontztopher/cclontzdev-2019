import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import Nav from './components/Nav';
import Index from './pages/Index';
import Footer from './components/Footer';

const Loading = props => (
  <div>{props.error ? console.log(props.error) : ''}</div>
);

const About = Loadable({
  loader: () => import('./About'),
  loading: Loading,
});

const Projects = Loadable({
  loader: () => import('./Projects'),
  loading: Loading,
});

export default () => (
  <Router>
    <>
      <Nav />
      <Route path="/" exact component={Index} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Footer />
    </>
  </Router>
);
