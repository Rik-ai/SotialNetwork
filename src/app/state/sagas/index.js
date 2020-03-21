import { all, takeEvery, takeLatest } from 'redux-saga/effects'

import { isRequestAction, isRequestLatestAction, requestSaga } from './request'
import { isPrepareAction, prepareSaga } from './prepare'
import { isMultipleAction, multipleSaga } from './multiple'

export default function* rootSaga() {
  yield all([
    takeEvery(isRequestAction, requestSaga),
    takeLatest(isRequestLatestAction, requestSaga),
    takeEvery(isPrepareAction, prepareSaga),
    takeEvery(isMultipleAction, multipleSaga)
  ])
}
