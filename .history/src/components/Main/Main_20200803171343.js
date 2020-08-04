import React, { useContext } from 'react';
import { todoContext } from '../../context/todoContext/todoContext';

export const Main = () => {
  const { loading, todos } = useContext(todoContext);

  return (
    <>
      <h1>Main</h1>
    </>
  )
};
