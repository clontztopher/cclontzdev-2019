import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="hero">
    <div className="hero-body">
      <div className="container has-text-centered">
        <p className="is-size-1">
          <span role="img" aria-label="wave">
            👋
          </span>
        </p>
        <h2 className="title is-3">
          <span>Thanks</span>
          for visiting!
        </h2>
        <p className="subtitle">
          Check out some of my work samples, code
          <br />
          samples on GitHub, or contact me on LinkedIn.
        </p>
        <p className="buttons">
          <Link to="/projects" className="button is-info">
            <span className="icon">
              <i className="fas fa-folder" />
            </span>
            <span>Projects</span>
          </Link>
          <a
            href="https://github.com/clontztopher"
            className="button is-info"
            target="_blank"
            rel="noopener noreferrer">
            <span className="icon">
              <i className="fab fa-github" />
            </span>
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/chrisclontz/"
            className="button is-info"
            target="_blank"
            rel="noopener noreferrer">
            <span className="icon">
              <i className="fab fa-linkedin" />
            </span>
            <span>LinkedIn</span>
          </a>
        </p>
      </div>
    </div>
  </div>
);
