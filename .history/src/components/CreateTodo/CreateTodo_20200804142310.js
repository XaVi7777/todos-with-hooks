import React from 'react';

export const CreateTodo = () => {


  return (
    <>
      <div className="modal">
        <div className="modal-body">
          <button className="close-modal-btn">X</button>
          <label forhtml="title">Краткое описание:</label>
          <input type="text" name="title" />
          <button 
          className="create-btn">Создать</button>
        </div>
      </div>

    </>
  )
}
