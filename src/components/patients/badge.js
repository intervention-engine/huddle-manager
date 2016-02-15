import React from 'react';


export const PatientBadge = ({patient, notifications=[], risks=[]}) => (
  <div className="patient">
    <div className="patient-info">
      <div className="patient-name">
        {getPatientName(patient)}

        <span className="badge">{notifications.length}</span>

      </div>
      <div className="patient-age-gender">
        <span className="patient-age">
          {getPatientAge(patient)} yrs
        </span>
        <span className="patient-gender">
          {getPatientGender(patient)}
        </span>
      </div>
      <div className="patient-risk-bar-container">
        <div className="patient-risk-bar">
            <span className="patient-risk">0</span>
        </div>
      </div>
    </div>
  </div>
);


let getPatientName = (patient) =>{
  let {id, name } = patient;
  let patientName = `Patient ${id}`;
  if (name) {
    let {family, given} = name[0];
    patientName = `${family}, ${given}`
  }
  return patientName;
}

let getPatientAge = ({birthDate}) =>{
  console.log(typeof birthDate);
  return 5
}

let getPatientGender = ({gender}) => {
  return (gender||"unknown").toLowerCase()
}

/*
<div {{action "selectPatient"}} class="patient {{if active 'active'}}">
  <div class="patient-info">
    <div class="patient-name">
      {{patient.fullName}}
      {{#if patient.notifications.count}}
        <span class="badge">{{patient.notifications.count}}</span>
      {{/if}}
    </div>
    <div class="patient-age-gender">
      <span class="patient-age">
        <i class={{ageIconClassName}}></i>
        {{patient.computedAge}} yrs
      </span>
      <span class="patient-gender">
        <i class="fa {{genderIconClassName}}"></i>
        {{patient.computedGender}}
      </span>
    </div>
    <div class="patient-risk-bar-container">
      <div class="patient-risk-bar">
        {{#if inputRisk}}
          <span class="patient-risk">{{computedRisk}}</span>
        {{/if}}
      </div>
    </div>
  </div>
</div>
*/
