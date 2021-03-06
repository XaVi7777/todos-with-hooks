import React, { useContext } from 'react';
import { todoContext } from '../../context/todoContext/todoContext';


export const EditPage = ({ match }) => {
  const { state } = useContext(todoContext);

  console.log(state)
  console.log(match)
  if (state.loading) {
    return <p className="text-center">Загрузка...</p>
  }

  return (
    <div
      className="main"
    >
      <h1>Задача № {}match</h1>
    </div>
  )
};
