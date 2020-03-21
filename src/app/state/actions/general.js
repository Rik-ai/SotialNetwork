import * as ActionTypes from 'state/types'

export const catchApiError = error => ({
  type: ActionTypes.CATCH_API_ERROR,
  error
})
