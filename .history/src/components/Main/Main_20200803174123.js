import React, { useContext, useEffect } from 'react';
import { todoContext } from '../../context/todoContext/todoContext';

export const Main = () => {
  const { state, getTodos } = useContext(todoContext);

  console.log(state)
  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  if (state.loading) {
    return <p className="text-center">Загрузка...</p>
  }
  return (
    <>
      {
        state.todos
          ? <TO
      }
    </>
  )
};
