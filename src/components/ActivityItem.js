import React from 'react';

const ActivityItem = ({activity}) => {
  return (
    <div className="activity_item mb-4 d-flex align-items-start justify-content-between">
      <div className="d-flex align-items-center ">
        <div className="brand me-3" style={{backgroundColor: `${activity.color}`}}>
          <img src={activity.logo} alt="" />
        </div>
        <div>
          <h6 className="m-0 fw-bolder ">{activity.name}</h6>
          <small className="text-black-50">Just Now</small>
        </div>
      </div>
      <div>
        <small className="text-black-50">{activity.amount}</small>
      </div>
    </div>
  );
};

export default ActivityItem;