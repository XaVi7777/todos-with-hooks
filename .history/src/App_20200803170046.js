import React from 'react';
import { MainPage } from './pages/MainPage/MainPage';
import { ToDoState } from './context/todoContext/ToDoState';

function App() {
  return (
    <ToDoState>
      
    </ToDoState>
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
