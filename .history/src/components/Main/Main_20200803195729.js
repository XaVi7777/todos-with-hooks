import React, { useContext, useEffect } from 'react';
import { todoContext } from '../../context/todoContext/todoContext';
import { Todos } from '../Todos/Todos';

export const Main = () => {
  const { state, getTodos, deleteTodo } = useContext(todoContext);

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  if (state.loading) {
    return <p className="text-center">Загрузка...</p>
  }

  
  return (
    <div
      className="main"
    >
      {
        state.todos
          ? <Todos
            todos={state.todos}

          />
          : <p
            className="text-center"
          >У Вас пока нет задач!</p>
      }
    </div>
  )
};
