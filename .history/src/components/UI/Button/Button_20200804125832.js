import React from 'react';

export default ({ text, type, icon }) => (
  <>
    <button
      className={type}
      
    >
        {text}

      {icon}
    </button>
  </>
);
