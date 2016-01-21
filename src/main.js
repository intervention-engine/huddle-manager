import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { createHistory } from 'history'
import { syncHistory, routeReducer } from 'redux-simple-router'


const reducer = combineReducers(Object.assign({}, {
  routing: routeReducer
}))

const history = createHistory()

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(history)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)

const store = createStoreWithMiddleware(reducer)

window.store = store

import { routeActions } from 'redux-simple-router'
window.routeActions = routeActions

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store)

import {App} from './components/App';
import {Foo} from './components/Foo';




ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/patient/:patient_id" component={Foo} />
    </Router>
  </Provider>,
  document.getElementById('app')
)
