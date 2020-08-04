import React from 'react';

export default ({ text, type, icon, onClick }) => (
  <>
    <button
      className={type}

    >
        {text}

      {icon}
    </button>
  </>
);
