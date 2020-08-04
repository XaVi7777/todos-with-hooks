import React, { useContext, useEffect } from 'react';
import { todoContext } from '../../context/todoContext/todoContext';

export const Main = () => {
  const context = useContext(todoContext);

  useEffect(() => {
    contextgetTodos();
    // eslint-disable-next-line
  }, []);

  // if (loading) {
  //   return <p className="text-center">Загрузка...</p>
  // }
  return (
    <>
      <h1>Main</h1>
    </>
  )
};
