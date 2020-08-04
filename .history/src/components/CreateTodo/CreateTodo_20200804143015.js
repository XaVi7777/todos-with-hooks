import React from 'react';

export const CreateTodo = () => {


  return (
    <>
      <div className="modal">
          <button className="close-modal-btn">X</button>
        <div className="modal-body">
          <label forhtml="title">Краткое описание:</label>
          <input type="text" name="title" />
          <button 
          className="create-btn">Создать</button>
        </div>
      </div>

    </>
  )
}
