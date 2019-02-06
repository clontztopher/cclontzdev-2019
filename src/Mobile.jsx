import React from 'react';
import iphoneCard from '../public/img/iphone-card.png';

export default () => (
  <div className="columns">
    <div className="column">
      <div className="content">
        <h2 className="title is-5">Real Estate Exam Flashcard Study App</h2>
        <h3 className="subtitle is-6">Professional Project</h3>
        <p>
          The Real Estate Flashcard App was a project I worked on in an effort
          to bring the company's mobile apps in-house for quicker updates and
          trouble-shooting. It was developed using Swift for iOS and Java for
          Android.
        </p>
        <p>Contributions Included</p>
        <ul>
          <li>Design</li>
          <li>Development</li>
          <li>Deployment</li>
        </ul>
      </div>
    </div>
    <div className="column">
      <figure className="image">
        <img
          src={iphoneCard}
          style={{ width: '300px', margin: 'auto' }}
          alt=""
        />
      </figure>
    </div>
  </div>
);
