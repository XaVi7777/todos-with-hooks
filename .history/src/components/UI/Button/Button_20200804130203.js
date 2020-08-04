import React from 'react';

export default ({ text, type, icon, onClick }) => (
  <>
    <button
      className={type}
      onClick={onClick}
      onClick={()=> history}
    >
      {text}

      {icon}
    </button>
  </>
);
