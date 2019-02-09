import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Nav = ({ location }) => (
  <nav>
    <div>
      <NavLink to="/projects" className="has-text-dark" title="Projects">
        {location.pathname.includes('projects') ? (
          <span className="icon is-large has-background-warning">
            <i className="fas fa-folder-open fa-lg" />
          </span>
        ) : (
          <span className="icon is-large">
            <i className="fas fa-folder fa-lg" />
          </span>
        )}
      </NavLink>
    </div>
    <div>
      <NavLink to="/about" className="has-text-dark" title="Info">
        <span
          className={`icon is-large ${
            location.pathname.includes('about') ? 'has-background-warning' : ''
          }`}>
          <i className="fas fa-user-circle fa-lg" />
        </span>
      </NavLink>
    </div>
    <div className="nav-center">
      <NavLink to="/" className="has-text-dark">
        <span
          className={`title is-4 ${
            location.pathname === '/' ? 'has-background-warning' : 'lightgrey'
          }`}>
          chris clontz
        </span>
      </NavLink>
    </div>
    <div>
      <a
        href="https://github.com/clontztopher"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub">
        <span className="icon is-large">
          <i className="fab fa-github-square fa-lg" />
        </span>
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/chrisclontz/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn">
        <span className="icon is-large">
          <i className="fab fa-linkedin fa-lg" />
        </span>
      </a>
    </div>
  </nav>
);

export default withRouter(Nav);
