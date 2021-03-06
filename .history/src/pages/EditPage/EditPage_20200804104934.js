import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { todoContext } from '../../context/todoContext/todoContext';
import Button from '../../components/UI/Button/Button';
import { Footer } from '../../components/Footer/Footer';


export const EditPage = ({ match }) => {
  const { state } = useContext(todoContext);

  if (state.loading) {
    return <p className="text-center">Загрузка...</p>
  }

  return (
    <>
      <div
        className="edit-header">
        <h1>Задача № {match.params.id}</h1>
        <Button
          text="Удалить"
          icon={}
        />
      </div>

      <div
        className="edit-main"
      >
        <label for="title">Краткое описание</label>
        <input
          type="text"
          name="title"
        />

        <Link
          to="/"
        >
          <Button
            text="Вернуться к списку"
          />
        </Link>
      </div>
      <Footer />
    </>
  )
};
