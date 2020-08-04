import React from 'react';

export default ({ text, type, icon }) => (
  <>
    <button
      className={type}
    >
      <span>
        {text}

      {icon}
    </button>
  </>
);
