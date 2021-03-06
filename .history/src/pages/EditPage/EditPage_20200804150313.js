import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { todoContext } from '../../context/todoContext/todoContext';
import Button from '../../components/UI/Button/Button';
import { Footer } from '../../components/Footer/Footer';
import LittleRemoveIcon from '../../components/UI/Icons/RemoveIcon/LittleRemoveIcon';



export const EditPage = ({ match }) => {
  const { state, editTodo, getCurrentTodo, deleteTodo } = useContext(todoContext);
  const [value, setValue] = useState(getCurrentTodo(match.params.id));
  const [editBtn, setEditBtn] = useState(true);
  console.log(editBtn)

  const editClickHandler = ( )=>{
    
  }
  if (state.loading) {
    return <p className="text-center">Загрузка...</p>
  }

  return (
    <>
      <div
        className="edit-header">
        <h1>Задача № {match.params.id}</h1>
        <Link
          to="/"
        >
          <Button
            type="primary"
            text="Удалить"
            icon={<LittleRemoveIcon />}
            onClick={() => deleteTodo(match.params.id)}
          />
        </Link>
      </div>

      <div
        className="edit-main"
      >

        <label htmlFor="title">Краткое описание</label>
        <input
          className="edit-input"
          type="text"
          name="title"
          value={value}
          onChange={event => {
            setValue(event.target.value)
            setEditBtn(false)
          }}
        />

        <Link
          to="/"
        >
          <Button
            type="return"
            text={editBtn ? 'Вернуться к списку' : 'Сохранить'}
            onClick={editBtn ? undefined : editTodo}
          />
        </Link>

      </div>
      <Footer />
    </>
  )
};
