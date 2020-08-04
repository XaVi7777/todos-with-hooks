import React, { useContext, useEffect } from 'react';
import { todoContext } from '../../context/todoContext/todoContext';


export const EditPage = () => {
  const { state } = useContext(todoContext);

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
      <h1>EditPage</h1>
    </div>
  )
};
