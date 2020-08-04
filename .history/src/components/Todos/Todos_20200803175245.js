import React from 'react';
import { Todo } from './Todo';

export const Todos = ({ todos }) => {
  console.log(todos)
  return (
    <div
      className="table"
    >
      {
        todos.map(todo => {
          return <Todo
            
            todo={todo}
          />
        })
      }
    </div>
  )
};
