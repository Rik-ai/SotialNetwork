import * as ActionTypes from 'state/types'
import theme from 'shared/styles/theme.js'

const initialState = {
  isRequesting: false,
  theme: theme.filter( theme => theme.colors === 'dark')[0]
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ActionTypes.CATCH_API_ERROR: {
      return {
        ...state,
        isRequesting: false
      }
    }

    case ActionTypes.TOGGLE_THEME: {
      if(!action.theme) {
        console.error('No theme payload! Pass argument to the function')
        return {...state}
      }

      const newTheme = theme.filter( theme => theme.colors === action.theme)
      if(newTheme){
        return {
          ...state,
          theme: newTheme[0]
        }
      } else return {...state}
    }

    default:
      return state
  }
}
