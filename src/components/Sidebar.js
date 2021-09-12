import React, {useReducer, useState} from 'react';
import Logo from "./Logo";
import dashboardIcon from '../images/Dashboard.svg';
import activityIcon from '../images/Activity.svg';
import walletIcon  from '../images/Wallet.svg';
import productIcon from  '../images/Products.svg';
import giftIcon from '../images/gift.svg';
import SidebarItem from "./SidebarItem";

import '../styles/sidebar.scss'


function Sidebar(props) {
  const menus = [
    {
      icon: dashboardIcon,
      name: 'Dashboard'
    },
    {
      icon: activityIcon,
      name: 'Activity'
    },
    {
      icon: walletIcon,
      name: 'Wallet'
    },
    {
      icon: productIcon,
      name: 'Products'
    },
    {
      icon: giftIcon,
      name: 'Referrals'
    }
  ]

  const [menu] =  useState([...menus])
  return (
    <>
      <div className="d-none d-lg-block col-xl-2 col-lg-2 m-0 p-0">
        <div className="sidebar border-end vh-100">
          <div className="d-flex px-4 justify-content-center">
            <Logo style={{width: '11rem'}}/>
          </div>
          <div className="menus me-4">
            {
              menu.map((menu, i) => (
                <SidebarItem active={menu.name === 'Wallet'} menu={menu} key={i} />
              ))
            }
          </div>
        </div>
      </div>
      <div className="d-lg-none bg-white position-fixed shadow-sm top-0 w-100 mobile-nav">
        <div className="py-3 d-flex justify-content-center ">
          <Logo />
        </div>
      </div>
    </>
  );
}

export default Sidebar;