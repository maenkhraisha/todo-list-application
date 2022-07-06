import React from 'react';

import logo from '../img/logo.svg';
import logoAnimated from '../img/logo-animated.gif';

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logoAnimated} alt="logo"/>
      <div className="tilte-logo-container">
        <div className="one">
          <h1>To Do</h1>
        </div>
        <img className="logoicon" src={logo} alt="logo"/>
      </div>
    </header>
  );
};

export default Header;
