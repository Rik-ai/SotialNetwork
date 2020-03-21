import { put, call, select } from 'redux-saga/effects'
import { processSelectorsToPayload } from 'state/sagas/helpers'
import { buildAxiosRequestConfig, api } from 'shared/utils/api'
import * as Selectors from 'state/selectors'
import * as Actions from 'state/actions'
import _ from 'lodash'

export const isRequestAction = action => /_REQUEST$/.test(action.type)
export const isRequestLatestAction = action => /_REQUEST_LATEST$/.test(action.type)

export function* requestSaga(action) {
  const REQUEST_ACTION_TYPE = `${action.type}_START`
  const SUCCESS_ACTION_TYPE = `${action.type}_SUCCESS`
  const ERROR_ACTION_TYPE = `${action.type}_FAIL`

  try {
    const token = yield select(Selectors.getToken),
          organisationId = yield select(Selectors.getActiveOrganisationId)

    if(!token) throw new Error('Token is missed')

    const axiosRequestConfig = buildAxiosRequestConfig({
      ...action.payload,
      token,
      organisationId
    })

    yield put({ type: REQUEST_ACTION_TYPE })
    const response = yield call(api.request, axiosRequestConfig)

    yield put({ type: SUCCESS_ACTION_TYPE, response: response.data })

    /*
    * Handling success meta actions
    * */

    if(
      !Array.isArray(action?.meta?.successActions) &&
      !action?.meta?.successActions?.length
    ) return

    const { successActions } = action.meta

    for(let i = 0; i < successActions.length; i++) {
      const successAction = successActions[i]
      const selectors = Array.isArray(successAction?.selectorsToPayload)
        ? yield call(processSelectorsToPayload, successAction.selectorsToPayload)
        : {}

      const payloadMergeObjects = [
        selectors,
        successAction.provideResponse && { response },
        successAction.provideParentPayload && action.payload,
        typeof successAction.payload === 'object' && successAction.payload
      ]

      yield put({
        type: successAction.type,
        payload: _.merge(...payloadMergeObjects),
        meta: successAction.meta || {}
      })
    }

  } catch (err) {
    console.error('requestSaga :: catch an error', err)
    yield put(Actions.catchApiError(err))
    yield put({ type: ERROR_ACTION_TYPE, error: err })
  }
}
