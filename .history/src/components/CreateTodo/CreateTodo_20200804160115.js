import React from 'react';
import Button from '../UI/Button/Button';
import {} from 'react-router-dom'

export const CreateTodo = ({ closeModal, onChange, onClick }) => {


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
