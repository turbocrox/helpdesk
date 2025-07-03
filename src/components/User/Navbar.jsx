import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div
      className="flex items-center justify-between w-full h-[90px] top-0 left-0 fixed z-50 p-0 ml-0" style={{ background: 'rgba(85, 214, 194, 1)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <img src="/Helpdesk.png" alt="logo" className="w-[250px] h-[50px] object-contain mt-5 ml-1" />
      <div className="flex items-center mr-8">
        <img src="Group.png" alt="Group" className="h-[25px] w-[75px] mt-3 mr-6"  />
        <img src="notification.png" alt="notification" className="h-[30px] w-[28px] mt-3 mr-6"  />
        <img src="Personal.png" alt="personal Dashboard" className="h-[30px] w-[28px] mt-3 mr-6" />
        <Link to="/login">
          <img src="logout.png" alt="logout" className="h-[30px] w-[28px] mt-3" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
