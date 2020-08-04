import React from 'react';

export default ({ text, type, icon, onClick }) => (
  <>
    <button
      className={type}
onClick={onc}
    >
        {text}

      {icon}
    </button>
  </>
);
