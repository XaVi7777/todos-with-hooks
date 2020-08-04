import React from 'react';

export default ({ text, type, icon, onClick }) => (
  <>
    <button
      className={type}
      onClick={onClick}
      onClu
    >
      {text}

      {icon}
    </button>
  </>
);
