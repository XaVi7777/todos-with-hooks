import React from 'react';

export default ({ text,ty }) => (
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
