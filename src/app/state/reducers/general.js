import * as ActionTypes from 'state/types'

const initialState = {
  isRequesting: false
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ActionTypes.CATCH_API_ERROR: {
      return {
        ...state,
        isRequesting: false
      }
    }

    default:
      return state
  }
}
