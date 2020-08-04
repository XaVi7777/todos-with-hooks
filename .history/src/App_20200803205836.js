import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { ToDoState } from './context/todoContext/ToDoState';

function App() {
  return (
    <ToDoState>
      <Router>
        <div className="App">
          <Switch>
            <Route
            path="/"
            exact
            component={}
            component={}
          </Switch>
          < />
        </div>
      </Router>
    </ToDoState>
  );
}

export default App;
