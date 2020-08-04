import React, { useContext } from 'react';
import { todoContext } from '../../context/todoContext/todoContext';

export const Main = () => {
  const { setLoading, getTodos } = useContext(todoContext);
  console.log(setLoading, getTodos);
  
  return (
    <>
      <h1>Main</h1>
    </>
  )
};
