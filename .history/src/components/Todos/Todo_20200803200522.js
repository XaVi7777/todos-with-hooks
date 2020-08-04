import React, { useContext } from 'react';
import todoContext from '../../context/todoContext/todoContext'
import EditIcon from '../UI/Icons/EditIcon/EditIcon';
import RemoveIcon from '../UI/Icons/RemoveIcon/RemoveIcon';

export const Todo = ({ todo }) => {
  const { deleteTodo } = useContext(todoContext);
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
        <EditIcon />
        <RemoveIcon />

      </div>
    </div>
  )
};
