import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ location: { pathname }, match }) => (
  <div className="container">
    <div className="columns is-centered">
      <div className="column">
        <div className="tabs is-centered is-boxed">
          <ul>
            <li
              className={pathname === '/projects/csre-web' ? 'is-active' : ''}>
              <NavLink to={`${match.url}/csre-web`} activeClassName="is-active">
                <span className="icon">
                  <i className="fas fa-laptop" />
                </span>
                <span>Web</span>
              </NavLink>
            </li>
            <li
              className={
                pathname === '/projects/csre-mobile' ? 'is-active' : ''
              }>
              <NavLink
                to={`${match.url}/csre-mobile`}
                activeClassName="is-active">
                <span className="icon">
                  <i className="fas fa-mobile-alt" />
                </span>
                <span>Mobile</span>
              </NavLink>
            </li>
            <li
              className={pathname === '/projects/wikipedia' ? 'is-active' : ''}>
              <NavLink
                to={`${match.url}/wikipedia`}
                activeClassName="is-active">
                <span className="icon">
                  <i className="fab fa-wikipedia-w" />
                </span>
                <span>Wikipedia</span>
              </NavLink>
            </li>
            <li
              className={
                pathname === '/projects/calculator' ? 'is-active' : ''
              }>
              <NavLink
                to={`${match.url}/calculator`}
                activeClassName="is-active">
                <span className="icon">
                  <i className="fas fa-calculator" />
                </span>
                <span>Calculator</span>
              </NavLink>
            </li>
            <li className={pathname === '/projects/quotes' ? 'is-active' : ''}>
              <NavLink to={`${match.url}/quotes`} activeClassName="is-active">
                <span className="icon">
                  <i className="fas fa-quote-left" />
                </span>
                <span>Quotes</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
