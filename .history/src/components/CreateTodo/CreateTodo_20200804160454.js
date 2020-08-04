import React from 'react';
import Button from '../UI/Button/Button';


export const CreateTodo = ({ closeModal, onChange, onClick, err }) => {


  return (
    <>
      <div className="modal">

        <div className="modal-body">
          <Button
            text="X"
            type="close-modal-btn"
            onClick={closeModal}
          />

          <label forhtml="title">Краткое описание:</label>
          <input
            type="text"
            name="title"
            onChange={event => onChange(event.target.value)}
          />
          {
            err
            &&
            <
          }
          <Button
            text="Создать"
            type="create-btn"
            onClick={onClick}
          />
        </div>
      </div>

    </>
  )
}
