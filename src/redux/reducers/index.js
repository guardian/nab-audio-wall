import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import appReducer from './appReducer'

const rootReducer = combineReducers({
  appReducer,
  routing
})

export default rootReducer
