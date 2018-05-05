import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import nav from './nav'
import profilsReducer from '../profiles/reducer'

const rootReducers = combineReducers({
  nav: nav,
  profilsReducer
})

export default rootReducers