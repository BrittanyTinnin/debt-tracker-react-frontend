import { combineReducers, createStore } from 'redux'
import bills from './reducers/billsReducer'

const rootReducer = combineReducers({
    bills
})

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )