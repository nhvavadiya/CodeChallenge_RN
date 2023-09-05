import {put, call, takeEvery, take} from 'redux-saga/effects';
import {
  GET_TODO_DATA_REQUEST,
  GET_TODO_DATA_SUCCESS,
  GET_TODO_DATA_FAILED,
} from '../types';

import * as Api from '../../common/Api';

function* GetTodoDataAsync() {
  try {
    const response = yield call(Api.getTodoData);
    yield put({type: GET_TODO_DATA_SUCCESS, payload: response});
  } catch (e) {
    yield put({type: GET_TODO_DATA_FAILED, payload: e});
  }
}

export function* GetTodoDataSaga() {
  yield takeEvery(GET_TODO_DATA_REQUEST, GetTodoDataAsync);
}
export default GetTodoDataSaga;
