import React, { useContext } from 'react';
import Li
import { todoContext } from '../../context/todoContext/todoContext';
import EditIcon from '../UI/Icons/EditIcon/EditIcon';
import RemoveIcon from '../UI/Icons/RemoveIcon/RemoveIcon';

export const Todo = ({ todo }) => {
  const { deleteTodo } = useContext(todoContext);

  const onClickHandler = event => {
    if (event.target.classList.contains('icon-delete')) {
      deleteTodo(event.currentTarget.id)
    }
  }

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

      <div
        id={todo.id}
        className="table-cell action"
        onClick={event => onClickHandler(event)}
      >
        <EditIcon />
        <RemoveIcon />

      </div>
    </div>
  )
};
