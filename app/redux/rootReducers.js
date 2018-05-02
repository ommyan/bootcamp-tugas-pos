import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import nav from './nav'
import categoryReducer from '../products/categoryReducers'
import productsReducer from '../products/productsReducers'
import transactionReducer from '../orders/transactionReducer'
import orderReducer from '../orders/orderReducer'

const rootReducers = combineReducers({
  nav: nav,
  categoryReducer,
  productsReducer,
  transactionReducer,
  orderReducer
})

export default rootReducers