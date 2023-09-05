import {combineReducers} from 'redux';
import {RESET_ALL_DATA} from '../types';
import GetTodoDataReducer from './GetTodoDataReducer';
import GetPostsDataReducer from './GetPostsDataReducer';
import CurrentUserReducer from './CurrentUserReducer';

const appReducer = combineReducers({
  CurrentUserReducer: CurrentUserReducer,
  GetTodoDataReducer: GetTodoDataReducer,
  GetPostsDataReducer: GetPostsDataReducer,
});

const rootReducer = (state, action) => {
  if (action.type === RESET_ALL_DATA) {
    return appReducer(
      {CurrentUserReducer: {}, GetTodoDataReducer: {}, GetPostsDataReducer: {}},
      action,
    );
  }

  return appReducer(state, action);
};

export default rootReducer;
