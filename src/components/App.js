import React from 'react';
import { connect } from 'react-redux'




let ReduxApp = ({patientList}) => (
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
              <span className="badge count">{(patientList.toJSON().patients).length}</span>
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

export const App = connect(state => state)(ReduxApp)
