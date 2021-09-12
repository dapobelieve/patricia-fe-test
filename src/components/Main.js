import React, {useState} from 'react';
import '../styles/main.scss';
import CreditCard from "./CreditCard";
import CreditCardDetails from "./CreditCardDetails";
import Activity from "./Activity";
import bellIcon from "../images/bell.svg";
import menuIcon from "../images/menu.svg";
import arrowLeft from '../images/arrow-circle-left.svg';
import imageIcon from '../images/Image.svg';
import dollarIcon from "../images/$.svg";
import nairaIcon from "../images/naira.svg";


const Main = () => {
  const cards = [
    {
      type: "dollar",
      logo: dollarIcon,
      color: '#1D1E2C',
      balance: 200000
    },
    {
      type: "naira",
      logo: nairaIcon,
      color: "#92d0c9e8",
      balance: 43000
    }
  ];

  const [_cards] =  useState([...cards])

  return (
    <div className="col-lg-10">
      <div className="row main gx-0">
      <div className="col-lg-8 px-1">
        <div className="d-flex align-items-center py-4 border-bottom">
          <img src={arrowLeft} className="ps-md-4 cursor-pointer" alt="" />
          <h1 className="fs-1 ps-3 fw-bolder text-gray-100 m-0">Cards</h1>
        </div>
        <div className="px-md-4">
          <div className="d-flex  align-items-start flex-column flex-lg-row pt-lg-5 pt-3 mb-lg-5 mb-3">
            <div className="d-flex mb-3 mb-lg-0">
              <div className="rounded-border bg-blue d-flex ">
                <img src={imageIcon} className="p-3 " alt=""/>
              </div>
              <div className="ms-3">
                <h5 className="fw-bolder m-0 p-0">Virtual Card</h5>
                <p className="m-0 p-0 d-block text-black-50">Lorem Ipsum dolor sit amet</p>
              </div>
            </div>
            <button className="d-none d-lg-block btn btn-warning ms-lg-auto rounded-border py-2">Create New Card</button>
          </div>
          <div className="px-2 px-sm-0 mb-5">
            <div className="row mb-4 d-flex justify-content-sm-between">
              <div className="col-xxl-5 col-lg-7 col-sm-6  col-md-6">
                <CreditCard card={_cards[0]} />
              </div>
              <div className="col-md-6 col-lg-5 col-sm">
                <CreditCard card={_cards[1]} className="smaller-cards" style={{transform: 'scale(.85)', transformOrigin: 'left'}} />
              </div>
            </div>
            <button className="btn btn-outline-success rounded-border me-4">Freeze Card</button>
            <button className="btn btn-outline-danger rounded-border">Delete Card</button>
            <div className="d-grid">
              <button className="mt-4 d-lg-none btn btn-warning ms-lg-auto rounded-border py-2">Create New Card</button>
            </div>
          </div>
          <div>
            <div className="card border-0">
              <CreditCardDetails />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 bg-gray-9">
        <div className="px-md-3 px-2">
          <div className="mt-5 mb-5 d-md-flex align-items-center d-none justify-content-end">
           <div className="cursor-pointer user-image p-2 bg-white shadow rounded-2">
             <img src={bellIcon}  />
           </div>
            <div className="cursor-pointer  position-relative user-image p-1 shadow bg-white ms-2 rounded-2">
              <img loading="eager" className="rounded-2" src="https://res.cloudinary.com/rohing/image/upload/v1585572497/harley-davidson-1HZcJjdtc9g-unsplash_vwslej.jpg" alt="" />
            </div>
            <div className="ms-3 cursor-pointer">
              <img src={menuIcon} alt=""/>
            </div>
          </div>
          <Activity />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Main;