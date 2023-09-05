import {put, call, takeEvery, take} from 'redux-saga/effects';
import {
  CURRENT_USER_SUCCESS,
  CURRENT_USER_REQUEST,
  CURRENT_USER_FAILED,
} from '../types';

function* CurrentUserAsync({params}) {
  try {
    yield put({type: CURRENT_USER_SUCCESS, payload: params});
  } catch (e) {
    yield put({type: CURRENT_USER_FAILED, payload: e});
  }
}

export function* CurrentUserSaga() {
  yield takeEvery(CURRENT_USER_REQUEST, CurrentUserAsync);
}
export default CurrentUserSaga;
