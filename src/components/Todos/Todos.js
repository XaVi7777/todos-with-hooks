import React from 'react';
import { Todo } from './Todo';

export const Todos = ({ todos }) => {

  return (
    <div
      className="table"
    >
      {
        todos.map(todo => {
          return <Todo
            key={todo.id}
            todo={todo}
          />
        })
      }
    </div>
  )
};
