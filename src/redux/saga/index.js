import {all} from 'redux-saga/effects';
import GetTodoDataSaga from './GetTodoDataSaga';
import GetPostsDataSaga from './GetPostsDataSaga';
import CurrentUserSaga from './CurrentUserSaga';

export function* rootSaga() {
  yield all([CurrentUserSaga(), GetTodoDataSaga(), GetPostsDataSaga()]);
}
