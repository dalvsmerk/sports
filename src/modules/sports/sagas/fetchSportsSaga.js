import { call, put } from 'redux-saga/effects';

import { fetchSports } from '../api';
import { fetchSportsFailure, fetchSportsSuccess } from '../actions';

export default function* fetchSportsSaga() {
  try {
    const sports = yield call(fetchSports);
    yield put(fetchSportsSuccess(sports));
  } catch (error) {
    yield put(fetchSportsFailure(error.message));
  }
}
