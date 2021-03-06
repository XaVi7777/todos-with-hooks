import React from 'react';
import { BrowserRouter as Router,ro } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { ToDoState } from './context/todoContext/ToDoState';

function App() {
  return (
    <Router>
      <ToDoState>
        <div className="App">
          <MainPage />
        </div>
      </ToDoState>
    </Router>
  );
}

export default App;
