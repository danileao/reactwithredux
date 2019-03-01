import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { fetchCardByIdSuccess } from '../actions/cartaoAction';

export function* fetchCards(action) {
  const { data } = yield call(api.get, '/card');

  yield put(fetchCardByIdSuccess(data));
}
