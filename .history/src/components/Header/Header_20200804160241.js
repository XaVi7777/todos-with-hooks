import React, { useState, useContext } from 'react';
import Button from '../UI/Button/Button';
import { CreateTodo } from '../CreateTodo/CreateTodo';
import { todoContext } from '../../context/todoContext/todoContext';


export const Header = () => {
  const [show, showModal] = useState(false);
  const [inputValue, setValue] = useState('');
  const [err, setValue] = useState('');
  const { addTodo } = useContext(todoContext);

  const closeModal = () => {
    showModal(false);
  }

  const onChangeHandler = inputValue => {
    setValue(inputValue)
  }

  const onClickHandler = () => {
    showModal(false);
    addTodo(inputValue);
  }

  return (
    <>
      {show && <CreateTodo
        closeModal={closeModal}
        onChange={onChangeHandler}
        onClick={onClickHandler}
      />}
      <div className="header">
        <div
          className="header__title"
        >
          <h1>Список задач</h1>
        </div>

        <div
          className="header__addbtn"
        >
          <Button
            text="Добавить"
            type="primary"
            onClick={() => showModal(true)}
          />
        </div>
      </div>
    </>
  )
};
