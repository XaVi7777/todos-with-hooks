import React from 'react';

export const Todo = ({ todo }) => {
  console.log(todo)
  return (
    <div
      className="table-row"
    >
      <div 
      className="table-cell id"></div>
      <div className="table-cell title"></div>
      <div className="table-cell action">

      </div>
    </div>
  )
};
