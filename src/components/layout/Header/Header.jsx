import React from 'react';

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <h1>header</h1>
          <div className="header--nav">
            <a href="">about</a>
            <a href="">contact</a>
            <a href="">travel</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;