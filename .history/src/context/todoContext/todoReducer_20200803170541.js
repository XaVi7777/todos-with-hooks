import { GET_TODOS, SET_LOADING } from "../types";

const handlers = {

  DEFAULT: state => state,
}

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
}
