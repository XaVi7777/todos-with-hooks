import React from 'react';

export const CreateTodo = () => {


  return (
    <>
      <div className="modal">
        <div className="modal-body">
          <button className="close-modal-btn">X</button>
          <label forHtml="title">Краткое описание:</label>
          <input type="text" name="title" />
          <button>Создать</button>
        </div>
      </div>

    </>
  )
}
