import React from 'react';

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
        <span className="material-icons">
          create
</span>
        <span class="material-icons">
          delete
</span>
      </div>
    </div>
  )
};
