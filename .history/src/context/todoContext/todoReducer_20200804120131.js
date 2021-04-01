import { GET_TODOS, SET_LOADING, CATCH_ERROR, GET_CURRENT_TODO } from "../types";

const handlers = {
  [GET_TODOS]: (state, { payload }) => ({
    ...state,
    todos: payload,
    loading: false
  }),
  [SET_LOADING]: state => ({
    ...state,
    loading: true,
  }),
  [CATCH_ERROR]: (state, { payload }) => ({
    ...state,
    errorMessage: payload,
  }),
  [GET_CURRENT_TODO]: (state, { payload }) => ({
    ...state,
    todo: payload,
  }),

    DEFAULT: state => state,
}

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
}