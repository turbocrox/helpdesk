import React from 'react';

const Footer = () => {
  return (
    <div
      style={{
        width: 'calc(100vw - 250px)',
        height: '50px',
        position: 'fixed',
        bottom: 0,
        left: '250px',
        backgroundColor: 'rgba(85,214,194,1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      Footer
    </div>
  );
};

export default Footer;
