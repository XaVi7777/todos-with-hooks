import React from 'react';

export const CreateTodo = () => {


  return (
    <>
      <div className="modal">
        <button className="close-modal-btn">X</button>
        <div className="modal-body">
          <label forHtml="title">Краткое описание:</label>
          <input type="text" name="title" />
          <button>Создать</button>
        </div>
      </div>

    </>
  )
}
