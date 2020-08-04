import React, { useContext } from 'react';
import { } from '../../context/todoContext/todoContext';

export const Main = () => {
  const { loading, todos } = useContext(to);

  return (
    <>
      <h1>Main</h1>
    </>
  )
};
