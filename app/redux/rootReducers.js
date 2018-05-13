import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import nav from './nav'
import productsReducer from '../products/productsReducers'
import categoryReducer from '../products/categoryReducers'
import transactionReducer from '../orders/transactionReducer'
import orderReducer from '../orders/orderReducer'


const rootReducers = combineReducers({
  nav: nav,
  categoryReducer,
  productsReducer,
  orderReducer,
  transactionReducer
})

export default rootReducers