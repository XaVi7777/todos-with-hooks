import React from 'react';

export default ({ text,type }) => (
  <>
    <button
      className="btn-icon"
    >
      <span className="material-icons">
        {text}
      </span>
    </button>
  </>
);
