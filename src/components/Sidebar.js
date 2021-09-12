import React, {useEffect, useReducer, useState} from 'react';
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import dashboardIcon from '../images/Dashboard.svg';
import activityIcon from '../images/Activity.svg';
import walletIcon  from '../images/Wallet.svg';
import productIcon from  '../images/Products.svg';
import giftIcon from '../images/gift.svg';
import menuIcon from "../images/menu.svg";
import bellIcon from "../images/bell.svg";
import cancelIcon from "../images/cancel.svg"


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

  const [menu] =  useState([...menus]);
  const [mobileMenu, toggleMobileMenu] = useState(false);

  useEffect(() => {
    if(mobileMenu) {
      document.body.style.overflow = 'hidden'
    }else {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenu])
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
        <div className="py-3 d-flex justify-content-between align-items-center">
          <div className="ms-3 cursor-pointer">
            <img onClick={() => toggleMobileMenu(mobileMenu => !mobileMenu)} src={menuIcon} alt=""/>
          </div>
          <Logo />
          <div className="cursor-pointer position-relative user-image p-1 shadow bg-white ms-2 rounded-2">
            <img loading="eager" className="rounded-2" src="https://res.cloudinary.com/rohing/image/upload/v1585572497/harley-davidson-1HZcJjdtc9g-unsplash_vwslej.jpg" alt="" />
          </div>
        </div>
      </div>
      {
        mobileMenu &&
        <div className="position-absolute bg-white top-0 h-100 w-100 mobile-nav">
          <div className="menus me-4">
            <div className="p-3">
              <img onClick={() => toggleMobileMenu(mobileMenu => !mobileMenu)} src={cancelIcon} style={{height: '20px'}} className="cursor-pointer" alt=""/>
            </div>
            {
              menu.map((menu, i) => (
                <SidebarItem active={menu.name === 'Wallet'} menu={menu} key={i} />
              ))
            }
          </div>
        </div>
      }
    </>
  );
}

export default Sidebar;