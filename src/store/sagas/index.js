import { all, takeLatest } from 'redux-saga/effects';

import * as ActionTypes from '../const/ActionType';

import { fetchCards } from './cartaoSaga';

// REQUEST -> SAGA -> CHAMADA API -> SUCCESS

export default function* rootSaga() {
  yield all([takeLatest(ActionTypes.FETCH_CARD_ID_REQUEST, fetchCards)]);
}
