import {put, call, takeEvery, take} from 'redux-saga/effects';
import {
  GET_POSTS_DATA_REQUEST,
  GET_POSTS_DATA_SUCCESS,
  GET_POSTS_DATA_FAILED,
} from '../types';

import * as Api from '../../common/Api';

function* GetPostsDataAsync() {
  try {
    const response = yield call(Api.getPostsData);
    yield put({type: GET_POSTS_DATA_SUCCESS, payload: response});
  } catch (e) {
    yield put({type: GET_POSTS_DATA_FAILED, payload: e});
  }
}

export function* GetPostsDataSaga() {
  yield takeEvery(GET_POSTS_DATA_REQUEST, GetPostsDataAsync);
}
export default GetPostsDataSaga;
