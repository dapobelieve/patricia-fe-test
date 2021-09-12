import React, {useState} from 'react';
import "../styles/activity.scss"
import amazonIcon from "../images/amazon.svg";
import nikeLogo from "../images/nike.svg"
import applePayLogo  from "../images/apple-pay.svg";
import appleLogo from "../images/apple.svg";
import netflixLogo from "../images/netflix.svg";
import starbucksLogo from "../images/starbucks.svg"
import ActivityItem from "./ActivityItem";

function Activity(props) {
  const brands = [
    {
      name: "Amazon",
      color: "#FEA202",
      logo: amazonIcon,
      amount:  "$377.23"
    },
    {
      name: "Nike",
      color: "#1D1E2C",
      logo: nikeLogo,
      amount: "$237,737.55"
    },
    {
      name: "Starbucks",
      color: "#006156",
      logo: starbucksLogo,
      amount: "$873,873,834.3"
    },
    {
      name: "Netflix",
      color: "#CC4945",
      logo: netflixLogo,
      amount: "$873"
    },
    {
      name: "Apple",
      color: "#EFF2F7",
      logo: applePayLogo,
      amount: "$244.55"
    },
    {
      name: "Starbucks",
      color: "#006156",
      logo: starbucksLogo,
      amount: "$24"
    },
    {
      name: "Nike",
      color: "#1D1E2C",
      logo: nikeLogo,
      amount: "$300"
    },
    {
      name: "Apple",
      color: "#2A69AF",
      logo: appleLogo,
      amount: "$990"
    },
  ]
  const [activities] = useState([...brands])

  return (
    <div className="activity card border-0 rounded-border shadow-sm">
      <div className="card-body">
        <div>
          <div className="mb-3">
            <small className="m-0 fw-bold text-black-50">Recent Activity</small>
          </div>
          {
            activities.map((activity,  i) => (
              <ActivityItem key={i} activity={activity}  />
              ))
          }
        </div>
      </div>
    </div>
  );
}

export default Activity;