import React from 'react';

const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
  };
  return (
    <header style={headerStyle}>
      <div class="one">
        <h1>To Do</h1>
      </div>
    </header>
  );
};

export default Header;
