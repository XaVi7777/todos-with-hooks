import React from 'react';
import Button from '../UI/Button/Button';

export const CreateTodo = ({closeModal}) => {


  return (
    <>
      <div className="modal">
        <Button
          text="X"
          type="close-modal-btn"
          onClick={closeModal}
        />
        <div className="modal-body">
          <label forhtml="title">Краткое описание:</label>
          <input type="text" name="title" />

          <Button
            text="Создать"
            type="create-btn"
          />
        </div>
      </div>

    </>
  )
}
