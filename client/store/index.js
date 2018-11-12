import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import appreciate from './appreciate'
import mourn from './mourn'
import intention from './intention'
import cycle from './cycle'
//^^maybe have a central export for all reducers

const reducer = combineReducers({user, appreciate, mourn, intention, cycle})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './appreciate'
export * from './mourn'
export * from './intention'
export * from './cycle'