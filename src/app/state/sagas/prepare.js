import { put, call } from 'redux-saga/effects'
import { processSelectorsToPayload } from 'state/sagas/helpers'
import _ from 'lodash'

export const isPrepareAction = action => /_PREPARE$/.test(action.type)

export function* prepareSaga(action) {
  const selectors = Array.isArray(action?.meta?.selectorsToPayload)
    ? yield call(processSelectorsToPayload, action.meta.selectorsToPayload)
    : {}

  yield put({
    type: action.meta.finalActionType,
    payload: _.merge(action?.payload, selectors),
    meta: action.meta?.meta || {}
  })
}
