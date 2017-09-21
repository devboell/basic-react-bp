
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
// import appReducer from 'containers/App/reducer'

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    /* istanbul ignore next */
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
/* eslint-enable */

const rootReducer = combineReducers({
  // app: appReducer,
})

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
)

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('./containers/App/reducer', () => {
      store.replaceReducer(rootReducer)
    })
  }
}
/* eslint-enable */

export default store
