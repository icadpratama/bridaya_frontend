import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import todoSagas from './todo/saga';
import chatSagas from './chat/saga';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    todoSagas(),
    chatSagas()
  ]);
}
