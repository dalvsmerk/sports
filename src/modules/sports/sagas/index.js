import { takeLatest } from 'redux-saga/effects';

import { FETCH_SPORTS_REQUEST } from '../constants';
import fetchSportsSaga from './fetchSportsSaga';

export function* sportsSaga() {
  yield takeLatest(FETCH_SPORTS_REQUEST, fetchSportsSaga);
}
