import React from 'react';

export default ({ text, type, icon, on }) => (
  <>
    <button
      className={type}

    >
        {text}

      {icon}
    </button>
  </>
);
