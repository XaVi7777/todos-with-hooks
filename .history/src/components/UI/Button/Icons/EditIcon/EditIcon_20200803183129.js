import React from 'react';

export default ({ text, type }) => (
  <>
    <button
      className={type}
    >
      <span>
        {text}
      </span>
    </button>
  </>
);
