import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import bills from './reducers/billsReducer'
import { composeWithDevTools } from 'redux-devtools-extension';



const rootReducer = combineReducers({
    bills
})

export default createStore(
    rootReducer, composeWithDevTools(
        applyMiddleware(thunk)
        // other store enhancers if any
    )
  )