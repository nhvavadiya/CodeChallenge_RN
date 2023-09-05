import {GET_TODO_DATA_SUCCESS, GET_TODO_DATA_FAILED} from '../types';
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TODO_DATA_SUCCESS:
      return {GetTodoDataSuccess: true, data: action.payload};

    case GET_TODO_DATA_FAILED:
      return {GetTodoDataSuccess: false, error: action.payload};

    default:
      return state;
  }
};
