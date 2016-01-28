import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { createHistory } from 'history'
import { syncHistory, routeReducer } from 'redux-simple-router'
import { routeActions } from 'redux-simple-router'

import {FHIRRequest} from './middleware/fhir'

import { PatientListReducer } from './reducers/patient-list'




const reducer = combineReducers(Object.assign({}, {
  routing: routeReducer,
  patientList: PatientListReducer
}))

const history = createHistory()

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(history)
const createStoreWithMiddleware = applyMiddleware(
  FHIRRequest,
  reduxRouterMiddleware
)(createStore)


const store = createStoreWithMiddleware(reducer)
window.store = store


// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store)


import {PatientList} from './components/PatientList';
import {Foo} from './components/Foo';





ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={PatientList} />
      <Route path="/patient/:patient_id" component={Foo} />
    </Router>
  </Provider>,
  document.getElementById('app')
)
