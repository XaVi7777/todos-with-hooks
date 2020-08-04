import React from 'react';

export const CreateTodo = () => {


  return (
    <>
      <div className="modal">
        <div className="modal-body">
          <button className="close-modal-btn">X</button>
          <label for>Краткое описание:</label>
          <input type="text" />
          <button>Создать</button>
        </div>
      </div>

    </>
  )
}
