import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import allReducers from '../reducers'

const composeEnhancers = composeWithDevTools({ trace: true })

export default function configureStore() {
  return createStore(allReducers, composeEnhancers(applyMiddleware(thunk)))

}
