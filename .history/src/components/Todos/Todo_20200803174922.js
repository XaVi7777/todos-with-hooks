import React from 'react';

export const Todo = ({ todos }) => {
  console.log(todos)
  return (
    <div
      className="table__"
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
