import React, { useState } from 'react';

import Button from '../UI/Button/Button';
import { CreateTodo } from '../CreateTodo/CreateTodo';
export const Header = () => {
  const [show, showModal] = useState(false);
  const [inputValue, setValue] = useState('');

  const closeModal = () => {
    showModal(false);
  }

  const onChangeHandler = inputValue => {
    setValue(inputValue)
  }

  const onClickHandler = () => {

  }

  return (
    <>
      {show && <CreateTodo
        closeModal={closeModal}
        onChange={onChangeHandler}
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
