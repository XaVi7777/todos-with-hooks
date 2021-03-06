import React, { useReducer } from 'react';
import { todoContext } from './todoContext';
import { todoReducer } from './todoReducer';
import { GET_TODOS, SET_LOADING, CATCH_ERROR } from '../types';


export const ToDoState = ({ children }) => {
  const initialState = {
    todo: {},
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

  const editTodo = async todoID => {
    const response = await fetch(`${API_URL}/${todoID}`);

    const json = await response.json();
    console.log(json);
  }

  const getCurrentTodo = async todoID => {
    const currentTodo = {};
    state.todos.forEach(todo => {
      console.log(333)
      if (todo.id === +todoID) {
        currentTodo.title = todo.title
      }
    })
    return currentTodo;
  }
  // const getUser = async name => {
  //   setLoading();

  //   const response = await axios.get(
  //     withCreds(`https://api.github.com/users/${name}?`)  
  //   );

  //   dispatch({
  //     type: GET_USER,
  //     payload: response.data,
  //   })
  // }

  // const getRepos = async name => {
  //   setLoading();

  //   const response = await axios.get(
  //     withCreds(`https://api.github.com/users/${name}/repos?per_page=5&`)  
  //   );

  //   dispatch({
  //     type: GET_REPOS,
  //     payload: response.data,
  //   })
  // }

  // const clearUsers = () => {
  //   dispatch({
  //     type: CLEAR_USERS,
  //   })
  // }

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    })
  }

  // const { user, users, repos, loading } = state;

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
