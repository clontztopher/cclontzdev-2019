import React from 'react';

const iframeSrcMap = {
  wikipedia: 'https://codesandbox.io/embed/oj92xr39pq?view=preview',
  calculator: 'https://codesandbox.io/embed/xox8ynzkmo?view=preview',
  quotes: 'https://codesandbox.io/embed/xl1yy0wz2q?view=preview',
};

export default ({ projectTitle }) => (
  <>
    <div className="columns">
      <div className="column is-6 is-offset-3">
        <h2 className="title is-5">
          {projectTitle.replace(/(^\w)/, m => m.toUpperCase())}
        </h2>
        <h3 className="subtitle is-6">Personal Project</h3>
        <iframe
          title="Projects"
          src={iframeSrcMap[projectTitle]}
          style={{
            width: '100%',
            height: '600px',
            border: '0',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        />
      </div>
    </div>
  </>
);
