import React, { useContext, useEffect } from 'react';
import { todoContext } from '../../context/todoContext/todoContext';
import { Todos } from '../Todos/Todos';

export const EditPage = () => {
  const { state, getTodos } = useContext(todoContext);

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

    </div>
  )
};
