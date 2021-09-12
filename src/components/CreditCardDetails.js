import React from 'react';

function CreditCardDetails(props) {
  return (
    <div className="card-body card-details rounded-border px-3">
      <div className="row gx-0 gy-3 p-1 p-md-3">
        <div className="col-md-7">
          <div className="fs-6 d-flex align-items-center mb-3">
            <span className="text-black-50">Card Balance: </span><span className="text-success fs-6 w-100">$3000.73</span>
          </div>
          <div className="fs-6 d-flex align-items-center mb-3">
            <span className="text-black-50">Name: </span><span className="text-black-50 fs-6 w-100">Netflix Card</span>
          </div>
          <div className="d-flex align-items-center fs-6 mb-3">
            <span className="text-black-50">Card Status: </span><span className="text-black-50 fs-6 w-100">Active</span>
          </div>
          <div className="d-flex align-items-center fs-6 mb-3">
            <span className="text-black-50">Billing Address: </span><span className="text-black-50 fs-6 w-100">Patricia HQ, SA 109827</span>
          </div>
          <div className="d-flex align-items-center fs-6">
            <span className="text-black-50">Date Created: </span><span className="text-black-50 fs-6 w-100">March 3rd 2020, 9:48:36 am</span>
          </div>
        </div>
        <div className="col-md-5">
          <div className="d-flex">
            <button className="btn btn-outline-success ms-md-auto rounded-border">Fund Card</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCardDetails;