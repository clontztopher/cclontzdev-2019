import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Index from './pages/Index';
import About from './About';
import Projects from './Projects';
import Footer from './components/Footer';

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
