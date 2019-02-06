import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

import Nav from './components/Nav';
import Index from './pages/Index';
import Footer from './components/Footer';

const Loading = props => (
  <div>{props.error ? console.log(props.error) : ''}</div>
);

let About = Loadable({
  loader: () => import('./About'),
  loading: Loading,
});

let Projects = Loadable({
  loader: () => import('./Projects'),
  loading: Loading,
});

const App = props => (
  <>
    {/* Router must have single child */}
    <Nav {...props} />
    <Route path="/" exact component={Index} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Footer />
  </>
);

export default withRouter(App);
