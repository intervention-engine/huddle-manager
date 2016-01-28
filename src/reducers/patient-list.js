import Immutable from 'immutable'

export const PatientListReducer = (state = Immutable.Map({patients: []}) , action) => {
  console.log(action.type);
  switch (action.type) {
    case "PATIENT_LIST_LOAD_SUCCESS":
        let patients = action.data.entry.map(function(el){return el.resource})
        return state.set('patients', patients)
      break;
    default:
      return state
  }
}



/*

This section of the app is a list of patient badges, as such we are going to
represent the state as an array of Objects. Also, because the data is paginated
coming from the FHIR server we also need to store current page, perPage, and
url to the next page and previous page if we need it.

Example State Below:


{
  ...
  patientList:{
    patients: [
        {...},
        {...}
    ],
    pagination:{
      currentPage: 0,
      perPage: 10,
      nextPage: ...,
      prevPage: ...
    }
  }
}

*/
