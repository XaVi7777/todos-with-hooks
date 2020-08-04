import React, { useContext } from 'react';
import { } from '../../context/todoContext/todoContext';

export const Main = () => {
  const { loading, users } = useContext(GithubContext);

  return (
    <>
      <h1>Main</h1>
    </>
  )
};
