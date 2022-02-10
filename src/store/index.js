import { createStore, combineReducers } from 'redux'
// import countReducer, { renderCountReducer } from './countReducer'
import { usersReducer } from './globalReducer'
// import { applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './globalReducer'


const rootReducer = combineReducers({
  global: globalReducer,
})

// export const store = createStore(rootReducer, applyMiddleware(thunk))

export const store = configureStore({
  reducer: rootReducer,
})
