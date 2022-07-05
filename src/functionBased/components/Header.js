import React from 'react';

import logo from '../img/logo.svg';
import logoAnimated from '../img/logo-animated.gif';

const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
  };
  return (
    <header className="header">
      <img className="logo" src={logoAnimated} />
      <div className="tilte-logo-container">
        <div className="one">
          <h1>To Do</h1>
        </div>
        <img className="logoicon" src={logo} />
      </div>
    </header>
  );
};

export default Header;
