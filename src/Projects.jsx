import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import ProjectTabs from './components/ProjectTabs';
import Project from './components/Project';
import CSREWeb from './Web';
import CSREMobile from './Mobile';

export default ({ location, match }) => (
  <>
    <ProjectTabs match={match} location={location} />
    <section className="section">
      <div className="container">
        <Switch>
          <Route path={`${match.path}/csre-web`} component={CSREWeb} />
          <Route path={`${match.path}/csre-mobile`} component={CSREMobile} />
          <Route
            path={`${match.path}/wikipedia`}
            render={() => <Project projectTitle="wikipedia" />}
          />
          <Route
            path={`${match.path}/calculator`}
            render={() => <Project projectTitle="calculator" />}
          />
          <Route
            path={`${match.path}/quotes`}
            render={() => <Project projectTitle="quotes" />}
          />
          <Redirect from={`${match.path}/`} to={`${match.path}/csre-web`} />
        </Switch>
      </div>
    </section>
  </>
);
