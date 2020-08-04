import React from 'react';
import EditIcon from '../UI/Icons/EditIcon/'

export const Todo = ({ todo }) => {

  return (
    <div
      className="table-row"
    >
      <div
        className="table-cell id"
      >
        {todo.id}
      </div>
      <div
        className="table-cell title">
        {todo.title}
      </div>

      <div className="table-cell action">


      </div>
    </div>
  )
};
