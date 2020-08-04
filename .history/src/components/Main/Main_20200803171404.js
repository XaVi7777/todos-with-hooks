import React, { useContext } from 'react';
import { todoContext } from '../../context/todoContext/todoContext';

export const Main = () => {
  const { loading, todos } = useContext(todoContext);
console.log(loading,todo)
  return (
    <>
      <h1>Main</h1>
    </>
  )
};
