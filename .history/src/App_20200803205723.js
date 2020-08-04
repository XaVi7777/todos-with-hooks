import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { ToDoState } from './context/todoContext/ToDoState';

function App() {
  return (
      <ToDoState>
    <Router>
        <div className="App">
          <MainPage />
        </div>
      </ToDoState>
    </Router>
  );
}

export default App;
