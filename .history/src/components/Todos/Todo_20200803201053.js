import React, { useContext } from 'react';
import { todoContext } from '../../context/todoContext/todoContext';
import EditIcon from '../UI/Icons/EditIcon/EditIcon';
import RemoveIcon from '../UI/Icons/RemoveIcon/RemoveIcon';

export const Todo = ({ todo }) => {
  const { deleteTodo } = useContext(todoContext);

  const onClickHandler = event => {
    console.log(event)
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
        onClick={()onClickHandler()}
      >
        <EditIcon />
        <RemoveIcon />

      </div>
    </div>
  )
};
