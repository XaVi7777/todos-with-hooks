import React from 'react';
import Button from '../UI/Button/Button';

export const CreateTodo = () => {


  return (
    <>
      <div className="modal">
        <Button
          text="X"
          type="close-modal-btn"
        />
        <div className="modal-body">
          <label forhtml="title">Краткое описание:</label>
          <input type="text" name="title" />

          <Button
            text="Создать"
            type="close-modal-btn"
          />
          <button
            className="create-btn"></button>
        </div>
      </div>

    </>
  )
}
