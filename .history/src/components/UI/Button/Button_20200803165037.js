import React from 'react';

export default ({ text, type }) => (
  <>
    <button
      className={type}
    >
      <span className="material-icons">
        {text}
      </span>
    </button>
  </>
);
