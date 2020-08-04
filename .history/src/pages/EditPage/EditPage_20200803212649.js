import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { todoContext } from '../../context/todoContext/todoContext';
import Button from '../../components/UI/Button/Button';


export const EditPage = ({ match }) => {
  const { state } = useContext(todoContext);

  console.log(state)
  console.log(match)
  if (state.loading) {
    return <p className="text-center">Загрузка...</p>
  }

  return (
    <>
      <div
      className="edit-header">

      </div>
      <h1>Задача № {match.params.id}</h1>
      <Button
        text="Удалить"
      />
      <Link
        to="/"
      >
        <Button
          text="Вернуться к списку"
        />
      </Link>

    </>
  )
};
