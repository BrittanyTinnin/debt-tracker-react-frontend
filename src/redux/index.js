import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import bills from './reducers/billsReducer'
import users from './reducers/userReducer'
import { composeWithDevTools } from 'redux-devtools-extension';



const rootReducer = combineReducers({
    bills,
    users
})

export default createStore(
    rootReducer, composeWithDevTools(
        applyMiddleware(thunk)
        // other store enhancers if any
    )
  )