import React from 'react';
import { MainPage } from './pages/MainPage/MainPage';
import { ToDoState } from './context/todoContext/ToDoState';

function App() {
  return (
    <ToDoState>
      <div className="App">
        <MainPage />
      </div>

    </ToDoState>
  );
}

export default App;
