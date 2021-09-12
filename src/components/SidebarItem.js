import React from 'react';

const SidebarItem = ({menu, active}) => {
  return (
    <div className={`d-flex ps-lg-4 ps-xl-5 px-1 mb-3 align-items-center py-3 ${active && 'active'}` }>
      <img alt="" src={menu.icon} className="cursor-pointer me-3"/>
      <p className="m-0 text-gray-100 fw-bold cursor-pointer">
        {menu.name}
      </p>
    </div>
  );
};

export default SidebarItem;