import React, { useContext } from 'react';
import { todoContext } from '../../context/todoContext/todoContext';

export const Main = () => {
  const { setLoading, todos } = useContext(todoContext);
  console.log(loading, todos)
  return (
    <>
      <h1>Main</h1>
    </>
  )
};
