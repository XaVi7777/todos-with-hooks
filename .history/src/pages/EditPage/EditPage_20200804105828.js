import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { todoContext } from '../../context/todoContext/todoContext';
import Button from '../../components/UI/Button/Button';
import { Footer } from '../../components/Footer/Footer';
import RemoveIcon from '../../components/UI/Icons/RemoveIcon/RemoveIcon';


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
          type="primary"
          text="Удалить"
          icon={<RemoveIcon style />}
        />
      </div>

      <div
        className="edit-main"
      >
        <label htmlFor="title">Краткое описание</label>
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
