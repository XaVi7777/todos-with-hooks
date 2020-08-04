import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { } 
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
              component={MainPage}
            />

            <Route
              path="/items/:id"
              exact
              component={EditPage}
            />
          </Switch>

        </div>
      </Router>
    </ToDoState>
  );
}

export default App;
