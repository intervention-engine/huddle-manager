import React from 'react';


export const App = ({}) => (
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
              <span className="badge count">5</span>
              <i className="fa fa-chevron-down pull-right"></i>
            </a>
          </div>
        </div>
        </div>

        <div class="panel-body patient-list">
          <div class="search search-panel">
            <div class="input-group">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button"><i class="fa fa-search"></i></button>
              </span>
              <input type="text" className="form-control" placeholder="Search patients..." />
            </div>
          </div>

          <div class="collapse in" id="choosePatient">
            <div class="patients-striped">
              Patient Badges Here
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);
