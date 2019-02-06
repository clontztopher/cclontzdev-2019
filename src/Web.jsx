import React from 'react';
import tabletImg from '../public/img/champions-screenshot.png';

export default () => (
  <div className="columns">
    <div className="column">
      <div className="content">
        <h2 className="title is-5">Champions School of Real Estate Website</h2>
        <h3 className="subtitle is-6">Professional Project</h3>
        <p>
          The Champions School of Real Estate website redesign was completed in
          early 2018 and was a result of years of hard work by a team of
          developers, designers and stakeholders. I was able to make
          contributions to the site in the form of backend PHP and frontend
          Javascript features that led to improvements for customers and
          developers.
        </p>
        <p>Contributions Included</p>
        <ul>
          <li>Developed custom functionality for the main menu.</li>
          <li>
            Developed a feature to organize course and state data structures and
            operations to ease development of purchase accordions throughout the
            site.
          </li>
          <li>Developed functionality of the course accordions.</li>
          <li>
            Created Broker Requirements feature for real estate agents to
            calculate their remaining requirements for obtaining a broker's
            license in Texas
          </li>
          <li>
            Created a Reviews Page using social media APIs to display customer
            reviews.
          </li>
          <li>Developed contact forms with Captcha and email service.</li>
          <li>
            Developed a feature allowing real estate agents to check their
            continuing education requirements with the Texas Real Estate
            Commission
          </li>
        </ul>
      </div>
    </div>
    <div className="column">
      <figure className="image">
        <img
          src={tabletImg}
          style={{ width: '400px', margin: 'auto' }}
          alt=""
        />
      </figure>
    </div>
  </div>
);
