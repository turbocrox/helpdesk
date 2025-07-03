import React from 'react';

const Sidebar = () => {
  return (
    <div
      className="fixed "
      style={{
        width: '250px',
        height: '934px',
        top: '90px',
        left: 0,
        background: 'rgba(106, 103, 103, 0.21)' 
      }}
    >
      <img src="/dashboard.png" alt="dashboard" className="w-full h-auto" />
    </div>
  );
};

export default Sidebar;
