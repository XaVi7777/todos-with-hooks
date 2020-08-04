import React, { useState } from 'react';

import Button from '../UI/Button/Button';
import { CreateTodo } from '../CreateTodo/CreateTodo';
export const Header = () => {
  const [value, setValue] = useState(false);

  return (
    <>
      {value && <CreateTodo />}
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
            onClick={() => setValue(true)}
          />
        </div>
      </div>
    </>
  )
};
