import React from 'react';

export const CreateTodo = () => {


  return (
    <>
      <div className="modal">
        <div className="modal-body">
          <button className="close-modal-btn">X</button>
          <h4>Краткое описание:</h4>
          <input type="text" />
          <button>Создать</button>
        </div>
      </div>

    </>
  )
}
