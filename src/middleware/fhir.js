import fetch from 'isomorphic-fetch'

// Fires off a FHIR request, it will look for a fhirResource field in the action to trigger

export const FHIRRequest = store => next => action => {
  // If we aren't specifying a resource don't pass
  // But also, if there's already data we don't want to make another request
  if (!action.fhirResource || action.data){
    return next(action)
  }
  return fetch(action.fhirResource)
    .then(response => response.json())
    .then(json => store.dispatch(Object.assign({}, action, {type:`${action.type}_SUCCESS`, data: json})))
}
