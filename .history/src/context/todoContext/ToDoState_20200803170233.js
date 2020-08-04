import React, { useReducer } from 'react';
import { todoContext } from './todoContext';
import { todoReducer } from './todoReducer';
import {GET_TODOS } from '../types';


export const ToDoState = ({ children }) => {
  const initialState = {
    todos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(todoReducer, initialState);

  // const search = async value => {
  //   setLoading();

  //   const response = await axios.get(
  //     withCreds(`https://api.github.com/search/users?q=${value}&`)      
  //   );

  //   dispatch({
  //     type: SEARCH_USERS,
  //     payload: response.data.items,
  //   })
  // }

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

  // const setLoading = () => {
  //   dispatch({
  //     type: SET_LOADING,
  //   })
  // }

  // const { user, users, repos, loading } = state;

  return (
    <ToDoContext.Provider
      value={}
    >
      {children}
    </ToDoContext.Provider>
  )
}
