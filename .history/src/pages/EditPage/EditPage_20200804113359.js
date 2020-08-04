import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { todoContext } from '../../context/todoContext/todoContext';
import Button from '../../components/UI/Button/Button';
import { Footer } from '../../components/Footer/Footer';
import LittleRemoveIcon from '../../components/UI/Icons/RemoveIcon/LittleRemoveIcon';



export const EditPage = ({ match }) => {
  const { state, editTodo } = useContext(todoContext);

  // useEffect(() => {
  //   editTodo(match.params.id);
  //   // eslint-disable-next-line
  // }, []);

  if (state.loading) {
    return <p className="text-center">Загрузка...</p>
  }

console.log(state.todos)

  return (
    <>
      <div
        className="edit-header">
        <h1>Задача № {match.params.id}</h1>
        <Button
          type="primary"
          text="Удалить"
          icon={<LittleRemoveIcon />}
        />
      </div>

      <div
        className="edit-main"
      >
        <form
          className="edit-form"
        >
          <label htmlFor="title">Краткое описание</label>
          <input
            className="edit-input"
            type="text"
            name="title"
          />
        </form>

        <Link
          to="/"
        >
          <Button
            type="return"
            text="Вернуться к списку"
          />
        </Link>
      </div>
      <Footer />
    </>
  )
};
