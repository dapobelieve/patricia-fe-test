import React, {useState} from 'react';
import Logo from "./Logo";

import pattern from "../images/Pattrn.svg";
import eyeIcon from "../images/eye.svg";
import mastercardIcon from "../images/master-card.svg"

/**
 *
 * @param card
 * @param style
 * @param className
 * @returns {JSX.Element}
 * @constructor
 */

function CreditCard ({card, style, className}) {
  const [showBalance, toggleBalance] = useState(true)
  return (
    <div style={style} className={`credit-card ${className}`}>
        <div style={{backgroundColor: `${card.color}`}} className="position-relative overflow-hidden mb-3 mb-md-0">
          <div className="overlay position-absolute top-0 bottom-0 text-white pt-3 px-3 h-100 w-100">
            <div className="d-flex justify-content-between">
              <Logo color="white" />
              <img onClick={() => toggleBalance(showBalance => !showBalance)} className="cursor-pointer" src={eyeIcon} alt="eye-icon"/>
            </div>
            <div className="credit-card_number d-flex justify-content-between">
              <span>7545</span>
              <span>7545</span>
              <span>7545</span>
              <span>7545</span>
            </div>
            <div className="credit-card_balance mb-3 d-inline-flex align-items-center">
              <small className="me-2">BALANCE</small> <span className={showBalance ? `blur` : ''}>$200,000</span>
            </div>
            <div className="d-flex credit-card_holder align-items-center justify-content-between">
              <h6 className="flex-shrink-0 m-0">Card holder Name</h6>
              <div className="valid d-inline-flex align-items-center">
          <span className="d-inline-flex flex-column me-2">
            <small>VALID</small>
            <small>THRU</small>
          </span>
                10/12
              </div>
              <div className="ccv">
                <small className="fw-bolder">CVV</small>
              </div>
              <div>
                <img src={mastercardIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="images position-absolute dollar"><img src={card.logo} alt=""/></div>
          <div className="images position-absolute pattern overflow-hidden"><img src={pattern} alt=""/></div>
        </div>
      </div>
  );
}

export default CreditCard;