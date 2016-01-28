import React from 'react';
import { connect } from 'react-redux'




let PatientListTemplate = ({patientList}) => (
  <div className="container patients">
    <div className="title-panel">
      <span className="title-text">Patients</span>
    </div>
    <div className="row">
      {/*Patient Panel*/}
      <div className="col-sm-3 patient-populations-list">
        <div className="panel patients-panel">
        <div className="panel-heading">
          <div className="collapse-panel-title">
            <a data-toggle="collapse" href="#choosePatient" aria-expanded="true" aria-controls="collapseOne">
              Choose Patient
              <span className="badge count">{(patientList.patients).length}</span>
              <i className="fa fa-chevron-down pull-right"></i>
            </a>
          </div>
        </div>
        </div>

        <div className="panel-body patient-list">
          <div className="search search-panel">
            <div className="input-group">
              <span className="input-group-btn">
                <button className="btn btn-default" type="button"><i className="fa fa-search"></i></button>
              </span>
              <input type="text" className="form-control" placeholder="Search patients..." />
            </div>
          </div>

          <div className="collapse in" id="choosePatient">
            <div className="patients-striped">
              Patient Badges Here
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);


// This is the function that'll slice down the state to just the parts we care about.
// Example, since this is the patientList component we probably only care about
// what is in the patientList section of the state. If this changes, just return more

// And the toJS call is to pull it out of ImmutableJS land.
let mapStateFunc = (state) => {
  return {
    patientList: state.patientList.toJS()
  }
}


export const PatientList = connect(mapStateFunc)(PatientListTemplate)
