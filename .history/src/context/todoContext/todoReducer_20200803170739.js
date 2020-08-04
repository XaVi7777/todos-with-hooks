import { GET_TODOS, SET_LOADING } from "../types";

const handlers = {
  [GET_TODOS]: (state, { payload }) => ({
...state,
todos: payload,
loading
  })
    DEFAULT: state => state,
}

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
}
