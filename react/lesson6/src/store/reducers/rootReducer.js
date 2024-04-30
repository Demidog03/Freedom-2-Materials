import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { productsReducer } from './productsReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer
})

export default rootReducer