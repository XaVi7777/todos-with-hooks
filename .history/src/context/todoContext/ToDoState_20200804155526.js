import React, { useReducer } from 'react';
import { todoContext } from './todoContext';
import { todoReducer } from './todoReducer';
import { GET_TODOS, SET_LOADING, CATCH_ERROR } from '../types';


export const ToDoState = ({ children }) => {
  const initialState = {
    todo: {
      id: '',
      title: '',
    },
    todos: [],
    loading: false,
    errorMessage: ''
  }

  const API_URL = 'https://test.megapolis-it.ru/api/list';
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const getTodos = async () => {
    setLoading();

    const response = await fetch(API_URL);

    const json = await response.json();

    if (json.success) {
      dispatch({
        type: GET_TODOS,
        payload: json.data,
      })
    } else {
      dispatch({
        type: CATCH_ERROR,
        payload: json.error,
      })
    }
  }

  const deleteTodo = async todoID => {
    setLoading();

    const response = await fetch(`${API_URL}/${todoID}`, {
      method: 'DELETE',
    });

    const json = await response.json();

    if (json.success) {
      await getTodos();
    } else {
      dispatch({
        type: CATCH_ERROR,
        payload: json.error,
      })
    }
  }

  const editTodo = async (todoID, title) => {
    const response = await fetch(`${API_URL}/${todoID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
    const json = await response.json();
    if (json.success) {
      await getTodos();
    } else {
      dispatch({
        type: CATCH_ERROR,
        payload: json.error,
      })
    }
  }

  const getCurrentTodo = todoID => {
    const currentTodo = {};
    state.todos.forEach(todo => {

      if (todo.id === +todoID) {
        currentTodo.title = todo.title;
        currentTodo.id = todo.id
      }
    });
    return currentTodo.title
  }

  const addTodo = async title => {
    const response = await fetch(`${API_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
    const json = await response.json();
    if (json.success) {
      await getTodos();
    } else {
      dispatch({
        type: CATCH_ERROR,
        payload: json.error,
      })
    }
  }

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    })
  }

  return (
    <todoContext.Provider
      value={{
        setLoading, getTodos, deleteTodo,
        editTodo, getCurrentTodo,
        state,
      }}
    >
      {children}
    </todoContext.Provider>
  )
}
