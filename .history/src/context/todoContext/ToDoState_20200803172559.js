import React, { useReducer } from 'react';
import { todoContext } from './todoContext';
import { todoReducer } from './todoReducer';
import { GET_TODOS, SET_LOADING } from '../types';


export const ToDoState = ({ children }) => {
  const initialState = {
    todos: [],
    loading: false,
    errorMessage: ''
  }

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const getTodos = async value => {
    setLoading();

    const response = await fetch('https://test.megapolis-it.ru/api/list');

    const json = await response.json();

    dispatch({
      type: GET_TODOS,
      payload: json.data,
    })
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
      value={{ setLoading, getTodos, state.todos }}
    >
      {children}
    </todoContext.Provider>
  )
}
