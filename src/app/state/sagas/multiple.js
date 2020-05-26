import { put, call } from 'redux-saga/effects'
import { processSelectorsToPayload } from 'state/sagas/helpers'
import _ from 'lodash'


export const isMultipleAction = action => action.type === 'CONSISTENT_MULTIPLE_ACTIONS'

export function* multipleSaga(action) {
  if(!Array.isArray(action?.payload?.actions)) {
    console.error('multipleSaga :: action payload missed key `actions` or it\'s not array')
    return
  }

  for(let i = 0; i < action.payload.actions.length; i++) {
    const actionToProcess = action.payload.actions[i]

    const selectors = Array.isArray(actionToProcess?.selectorsToPayload)
      ? yield call(processSelectorsToPayload, actionToProcess.selectorsToPayload)
      : {}

    yield put({
      type: actionToProcess.type,
      payload: _.merge(actionToProcess?.payload, selectors),
      meta: actionToProcess?.meta || {}
    })
  }
}
