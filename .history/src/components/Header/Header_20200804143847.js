import React from 'react';
import Button from '../UI/Button/Button';

export const Header = () => {
  const [value, setValue] = useState(true);


  return (
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
        />
      </div>
    </div>
  )
};
